package com.blockchain.domain.request;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferMoneyRequest {

    @JsonProperty("fromAccount")
	private String fromAccount;
    @JsonProperty("fromAmount")
    private BigDecimal fromAmount;
    @JsonProperty("toCountry")
    private String toCountry;
    @JsonProperty("transferAmount")
    private BigDecimal transferAmount;
    @JsonProperty("toAccount")
    private BigDecimal toAccount;
    
	public TransferMoneyRequest(String fromAccount, BigDecimal fromAmount, String toCountry, BigDecimal transferAmount,
			BigDecimal toAccount) {
		super();
		this.fromAccount = fromAccount;
		this.fromAmount = fromAmount;
		this.toCountry = toCountry;
		this.transferAmount = transferAmount;
		this.toAccount = toAccount;
	}

	public String getFromAccount() {
		return fromAccount;
	}

	public void setFromAccount(String fromAccount) {
		this.fromAccount = fromAccount;
	}

	public BigDecimal getFromAmount() {
		return fromAmount;
	}

	public void setFromAmount(BigDecimal fromAmount) {
		this.fromAmount = fromAmount;
	}

	public String getToCountry() {
		return toCountry;
	}

	public void setToCountry(String toCountry) {
		this.toCountry = toCountry;
	}

	public BigDecimal getTransferAmount() {
		return transferAmount;
	}

	public void setTransferAmount(BigDecimal transferAmount) {
		this.transferAmount = transferAmount;
	}

	public BigDecimal getToAccount() {
		return toAccount;
	}

	public void setToAccount(BigDecimal toAccount) {
		this.toAccount = toAccount;
	}
    
   
}