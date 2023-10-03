const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getDoctorList = () => {
    let doctors = DB.doctors.map((doctor) => doctor.name);
    return doctors;
};

const getDoctorDetails = (doctorId) => {
    try{
        const doctor = DB.doctors.find((doctor) => doctor.name == doctorId);
    if(!doctor){
        throw {
            status: 400,
            message: `Doctor not found with the given name ${doctorId}`,
        };
    }
    return doctor;
    } catch(error) {
        throw {status: error?.status || 500, message: error?.message || error };
    }
};

const createBooking = (doctorId) => {
    const doctorIndex = DB.doctors.findIndex((doctor) => doctor.name == doctorId);
    if(doctorIndex === -1){
        return -1;
    }
    if(DB.doctors[doctorIndex].bookings === 0){
        return 0;
    }
    DB.doctors[doctorIndex].bookings = DB.doctors[doctorIndex].bookings - 1;
    saveToDatabase(DB);
    return 1; 
};

module.exports = {
    getDoctorList,
    getDoctorDetails,
    createBooking,
};