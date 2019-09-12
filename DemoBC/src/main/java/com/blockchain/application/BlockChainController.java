package com.blockchain.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.domain.request.TransferMoneyRequest;
import com.blockchain.domain.response.TransferMoneyResponse;
import com.blockchain.infrastructure.service.TransferMoneyService;

import io.swagger.annotations.Api;


	@Api("BlockChain Demo Endpoint")
	@RestController
	@RequestMapping("/demo/blockchain")
	public class BlockChainController {
		
		@Autowired
		public TransferMoneyService transferMoneyService;

	    @PostMapping("/transfer-money")
	    public TransferMoneyResponse transferMoney(@RequestParam(value = "transferMoneyRequest", required=false) TransferMoneyRequest transferMoneyRequest) {
	    	return transferMoneyService.transferMoney(transferMoneyRequest);
	    }
	    
	}



	