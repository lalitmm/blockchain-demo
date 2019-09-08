package com.blockchain.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferMoneyResponse {

    @JsonProperty("confirmationId")
	private final long confirmationId;
    @JsonProperty("content")
    private final String content;

    public TransferMoneyResponse(long confirmationId, String content) {
        this.confirmationId = confirmationId;
        this.content = content;
    }

    public long getConfirmationId() {
        return confirmationId;
    }

    public String getContent() {
        return content;
    }
}