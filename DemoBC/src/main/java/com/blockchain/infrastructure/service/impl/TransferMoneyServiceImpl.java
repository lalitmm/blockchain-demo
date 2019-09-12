package com.blockchain.infrastructure.service.impl;

import java.util.Random;

import org.springframework.stereotype.Service;

import com.blockchain.domain.request.TransferMoneyRequest;
import com.blockchain.domain.response.TransferMoneyResponse;
import com.blockchain.infrastructure.service.TransferMoneyService;

@Service("TransferMoneyService")
public class TransferMoneyServiceImpl implements TransferMoneyService {
	
	private static final Random generator = new Random();
	private static final String template = "Your Money Transfer has been Initiated";
	
	public TransferMoneyResponse transferMoney(TransferMoneyRequest transferMoneyRequest) {
		TransferMoneyResponse transferMoneyResponse = new TransferMoneyResponse();
		// TO DO blockchain Api call
		
		transferMoneyResponse.setConfirmationId(generator.nextLong());
		transferMoneyResponse.setMessage(template);
		
		
		return transferMoneyResponse;
	}
	

}
