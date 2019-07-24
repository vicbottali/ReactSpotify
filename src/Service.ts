import $ from 'jquery';

class Request {
    
    private static defaultHeaders: any = {  'Access-Control-Allow-Origin': '*' };

    static async get(url: string, headers: any = {}){
        let response;

        try { 
            response = await $.ajax({
                url: url,
                headers: Object.assign(headers, Request.defaultHeaders)
            });

            return response;
        } catch (error) {
            console.log(error);
            alert('Looks like something isn\'t quite right...');
        }
    }

    static async post(url: string, postData: any, headers: any = {}){
        let response;
        
        try { 
            response = await $.ajax({
                url: url,
                method: 'POST',
                headers: Object.assign(headers, Request.defaultHeaders),
                data: postData
            });

            return response;
        } catch (error) {
            console.log(error);
            alert('Looks like something isn\'t quite right...');
        }
     }
}

export {Request};