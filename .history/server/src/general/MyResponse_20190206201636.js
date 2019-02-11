exports.createResponse = createResponse; //export function for globally use
// Function for create response
function createResponse(res: { status: (arg0: any) => { send: (arg0: { 'status': any; 'message': any; 'payload': any; 'pager': any; }) => void; }; }, status: any, message: any, data: any, pager: any) {
    return res.status(status).send({
        'status': status,
        'message': message,
        'payload': data,
        'pager': pager
    });
}