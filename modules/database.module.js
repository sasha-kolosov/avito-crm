class Database {
    constructor(database) {
        this.database = database
    }

    get(params) {
        try {

            const answer = new DatabaseHandler({
                method : "GET",
                database : this.database,
                params : params
            })

            return answer.response()

        } catch (error) {
            return `Server answer ${error}`
        }
    }

    post() {
        try {

            const answer = new DatabaseHandler({
                method : "POST",
                database : this.database
            })

            return answer.response()

        } catch (error) {
            return `Server answer ${error}`
        }
    }

    update() {
        try {

            const answer = new DatabaseHandler({
                method : "UPDATE",
                database : this.database
            })

            return answer.response()

        } catch (error) {
            return `Server answer ${error}`
        }
    }

    delete() {
        try {

            const answer = new DatabaseHandler({
                method : "DELETE",
                database : this.database
            })

            return answer.response()

        } catch (error) {
            return `Server answer ${error}`
        }
    }

}