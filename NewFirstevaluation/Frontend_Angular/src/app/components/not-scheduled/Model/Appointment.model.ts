export interface Appointment{
    applicantId:string,
    date:string,
    location:string,
    isSet:boolean,
    status:string,
    jobSeeker:{
        fullName:string,
        email:string,
        phone:string,
        yearOfPassing:string,
        cgpa:string,
        language:string,
        keySkill:string,
        areaOfInterest:string,
        project:string
    }
}