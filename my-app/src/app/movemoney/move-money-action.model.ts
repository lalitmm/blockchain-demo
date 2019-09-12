export interface MoveMoneyActions {
    isFromAccountSubmitted:boolean,
    isAmountDetailsSubmitted:boolean,
    isBeneficiarySubmitted:boolean
}

export interface MoveMoneyRequest {
    fromAccount: string,
    fromAmount: string,
    country:string,
    transferamount:string,
    toAccount:string,
    location:string,
    name:string
}

