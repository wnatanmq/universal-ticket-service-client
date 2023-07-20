
export interface UTSUser{
    username : string,
    role : string
}



export class AuthService{

    private user!: UTSUser | null;  
    
    constructor(){

        const token = localStorage.getItem("troot_3");
        if (token) this.user = this.getUserFromT(token)
        console.log("AEE PORRA");
        
    }

    private getUserFromT(token : string) : UTSUser | null {        
        try {
            return <UTSUser> JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    }

    public getUser() : UTSUser | null {
        return this.user;
    }



}