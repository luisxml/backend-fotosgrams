import jwt from 'jsonwebtoken'

export default class Token{
    private static seed: string = 'pinToken:17823288-108239114-130713-131386-121286';
    private static caducidad: string = '30d';
    
    constructor() {}

    static getJwtToken(payload: any): string {
        return jwt.sign({
            usuario: payload
        }, this.seed, {expiresIn: this.caducidad});
    }

    static comprobarToken(userToken: string) {

        return new Promise((resolve, reject) => {

            jwt.verify(userToken, this.seed, (err, decoded) => {
                if (err) {
                    reject();
                } else {
                    resolve(decoded);
                }
            });

        });

        
    }
}
