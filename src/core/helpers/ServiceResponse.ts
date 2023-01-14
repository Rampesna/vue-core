class ServiceResponse{

    success?: boolean;
    message?: string;
    data?: any;
    status?: number;

    constructor(success: boolean, message: string, data: any, status: number){
        this.success = success;
        this.message = message;
        this.data = data;
        this.status = status;
    }

    get Success(){
        return this.success;
    }

    get Message(){
        return this.message;
    }

    get Data(){
        return this.data;
    }

    get Status(){
        return this.status;
    }

}

export default ServiceResponse;
