package com.revamp.core.dao;

import java.util.List;

import com.revamp.core.model.Quotation;

public interface QuotationDAO {

	long save(Quotation quotation);

	Quotation getQuotation(long id);

	List<Quotation> getQuotations();

	void delete(long id);

	List<Quotation> getQuotationByStatus(String quotationStatus);
	
	List<Quotation> getQuotationsBySchool(long schoolId);

}
