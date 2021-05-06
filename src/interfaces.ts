export interface userInterface {
    id : string,
    name : string,
    age : number,
    address : string,
    imageUrl? : string,
    email1 : string, 
    email2 : string, 
    remarks? : string,
    reports? : Report[], 
} ;

export interface Report {
    id : number,
    userId : number,
    data1 : number,
    data2 : number,
    data3 : number,
} ;