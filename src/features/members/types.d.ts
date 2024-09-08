
export interface Member  {
    id: number;
    name: string;
    email: string;
    achiements: string[]; 
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