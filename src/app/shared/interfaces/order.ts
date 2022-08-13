export interface IOrder {
    product: string,
    tracking_id: string,
    date: string,
    status: Status
}

enum Status {
    Approved,
    Pending,
    Delivered
}
