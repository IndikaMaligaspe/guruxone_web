
export interface Member  {
    id: number;
    name: string;
    email: string;
    phone:string,
    achievements: string[]; 
  }

export interface MemberAchievment {
  id:number;
  achievementType:string;
  description:string;
  dateAwarded:string;
  venue:string;
  memberId:number;
}


export interface Payments{
  id:number;
  amount:number;
  description:string;
  paymentDate:string;
  method:string;
  memberId:number;
}

export interface Attendance{
  id:number;
  title:string;
  location:string;
  date:string;
  time:string;
  instructor:string;
}
