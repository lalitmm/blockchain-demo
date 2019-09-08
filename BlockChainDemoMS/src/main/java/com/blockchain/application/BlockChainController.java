package com.blockchain.application;

	import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blockchain.domain.response.TransferMoneyResponse;

import io.swagger.annotations.Api;
import io.swagger.models.Response;

	@Api("BlockChain Demo Endpoint")
	@RestController
	@RequestMapping("/demo/blockchain")
	public class BlockChainController {

	    private static final String template = "Money Transfer has been Initiated %s!";
	    private final AtomicLong counter = new AtomicLong();

	    @PostMapping("/login")
	    public Response login(@RequestParam("username") String name, @RequestParam("password") String password) {
	        return new Response();
	    }
	    
	    @PostMapping("/transfer-money")
	    public TransferMoneyResponse transferMoney(@RequestParam(value="name", defaultValue="Successfully") String name) {
	        return new TransferMoneyResponse(counter.incrementAndGet(),
	                            String.format(template, name));
	    }
	    
	}



	