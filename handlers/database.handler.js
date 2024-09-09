class DatabaseHandler {
    constructor(request) {
        this.request = request
    }

    response() {
        let BD

        if ( this.request.database == "USERS_DATABASE" ) { BD = USERS_DATABASE }

        if ( this.request.method == "GET" ) {
            const arr = []

            for ( let i = 0; i <= BD.length; i++ ) {
                for ( const element in BD[i] ) {
                    for ( const j in this.request.params ) {
                        if ( `${element}` == `${j}` && `${BD[i][element]}` == `${this.request.params[j]}` ) {
                            arr.push(BD[i])
                        }
                    }
                }
            }
            return arr
        }

        if ( this.request.method == "POST" ) {
            
        }

        if ( this.request.method == "UPDATE" ) {
            
        }

        if ( this.request.method == "DELETE" ) {
            
        }
    }
}