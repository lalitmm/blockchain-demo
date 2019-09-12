package com.blockchain.infrastructure.service;

import com.blockchain.domain.request.TransferMoneyRequest;
import com.blockchain.domain.response.TransferMoneyResponse;


public interface TransferMoneyService {
	public TransferMoneyResponse transferMoney(TransferMoneyRequest transferMoneyRequest);

}
