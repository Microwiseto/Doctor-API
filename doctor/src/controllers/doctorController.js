const doctorService = require("../services/doctorServices");

const getDoctorList = (req, res) => {
    const list = doctorService.getDoctorList();
    res.send({status: "OK", data: list});
} 

const getDoctorDetails = (req, res) => {
    const {
        params: {doctorId},
    } = req;
    if(!doctorId){
        res.status(400).send({status: "Failed", data: "Parameter ':doctorId' cannot be empty"});
    }
    try{
        const details = doctorService.getDoctorDetails(doctorId);
        res.send({status: "OK", data: details});
    } catch(error){
        res.status(error?.status || 500).send({status: "Failed", data: { error: error?.message || error}});
    }
}

const createBooking = (req, res) => {
    const {
        params: {doctorId},
    } = req;
    const booking = doctorService.createBooking(doctorId);
    if(booking === -1)
    res.status(400).send({status: "Failed", data: { error: `Doctor not found with the given name ${doctorId}` }})
    else if(booking === 0)
    res.status(200).send({status: "OK", data: "Booking unsuccessful due to no slots"})
    else
    res.status(201).send({status: "OK", data: "Booking successful"});
}

module.exports = {
    getDoctorList,
    getDoctorDetails,
    createBooking,
};