package com.blockchain.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferMoneyResponse {

    @JsonProperty("confirmationId")
	private long confirmationId;
    @JsonProperty("message")
    private String message;
    
    public TransferMoneyResponse() {
		// TODO Auto-generated constructor stub
	}

    public TransferMoneyResponse(long confirmationId, String message) {
        this.confirmationId = confirmationId;
        this.message = message;
    }

	public long getConfirmationId() {
		return confirmationId;
	}

	public void setConfirmationId(long confirmationId) {
		this.confirmationId = confirmationId;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	
}