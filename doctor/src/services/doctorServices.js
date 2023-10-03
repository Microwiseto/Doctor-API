const Doctor = require("../database/Doctor");

const getDoctorList = () => {
    const allDoctors = Doctor.getDoctorList();
    return allDoctors;
};

const getDoctorDetails = (doctorId) => {
    try{
        const doctorDetails = Doctor.getDoctorDetails(doctorId);
        return doctorDetails;
    } catch (error) {
        throw error;
    }
};

const createBooking = (doctorId) => {
    const booking = Doctor.createBooking(doctorId);
    return booking;
}

module.exports = {
    getDoctorList,
    getDoctorDetails,
    createBooking,
};