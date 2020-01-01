
const baseUrl = "https://api.getclothme.com";

export const authEndpoint = {
    signUp: baseUrl + '/auth/tenant/signup',
    signIn: baseUrl + '/auth/tenant/signin',
    changePassword: baseUrl + '/auth/tenant/changepassword/:id',
    resetPassword: baseUrl + '/auth/tenant/resetpassword/:id',
    forgotPassword: baseUrl + '/auth/tenant/forgotpassword',
    signOut: baseUrl + '/auth/tenant/signout'
}

export const accountEndpoint = {
    readAllAccount: baseUrl + '/account',
    readOneAccount: baseUrl + '/account/:id',
    updateAccount: baseUrl + '/account/updatebranduser/:id',
    disableAccount: baseUrl + '/account/disablebranduser/:id',
    enableAccount: baseUrl + '/account/enablebranduser/:id',
    removeAccount: baseUrl + '/account/removebranduser/:id',
}

export const productEndpoint = {
    createProduct: baseUrl + '/product',
    readAllProducts: baseUrl + '/product',
    readOneProduct: baseUrl + '/product/:id',
    updateProduct: baseUrl + '/product/updateproduct/:id',
    publishProduct: baseUrl + '/product/publishproduct/:id',
    deleteProduct: baseUrl + '/product/deleteproduct/:id',
}

export const orderEndpoint = {
    createOrder: baseUrl + '/order',
    readAllOrders: baseUrl + '/orders', 
    readOneOrder: baseUrl + '/orders/:id',
    updateOrder: baseUrl + '/orders/updateorder/:id',
    deleteOrder: baseUrl + '/orders/deleteorder/:id',
}

export const customerEndpoint = {
    readAllCustomers: baseUrl + '/customers',
    readOneCustomer: baseUrl + '/customers/:id',
    updateCustomer: baseUrl + '/customers/updatecustomer/:id',
    blockCustomer: baseUrl + './customers/blockcustomer/:id',
    deleteCustomer: baseUrl + '/customers/deletecustomer/:id',
}

export const messageEndpoint = {
    readAllMessages: baseUrl + '/refunds',
    readOneMessage: baseUrl + '/refunds/:id',
    editMessage: baseUrl + '/refunds/updaterefund/:id',
    sendMessage: baseUrl + './refunds/blockrefund/:id',
    blockMessage: baseUrl + './refunds/blockrefund/:id',
    deleteMessage: baseUrl + '/refunds/deleterefund/:id',
}

export const refundEndpoint = {
    readAllRefunds: baseUrl + '/refunds',
    readOneRefund: baseUrl + '/refunds/:id',
    updateRefund: baseUrl + '/refunds/updaterefund/:id',
    blockRefund: baseUrl + './refunds/blockrefund/:id',
    deleteRefund: baseUrl + '/refunds/deleterefund/:id',
}