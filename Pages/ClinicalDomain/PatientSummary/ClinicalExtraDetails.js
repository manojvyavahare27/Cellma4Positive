//Sathyanarayan

const {
  clickElement,
  typeText,
  selectFromDropdown,
} = require("../../../UtilFiles/StaticUtility.js");
const {
  selectFromSearchResults,
} = require("../../../UtilFiles/DynamicUtility.js");

class ClinicalExtraDetails {
  constructor(page) {
    this.page = page;
    //Search Medication fields
    this.clinicalItemCollapsable = page.locator(
      "xpath=//div[@data-testid='CommonCellmaPopup']//button[@aria-label='cellmaAccordionIcon']"
    );

    //Allergy
    //this.clinicalItemSubcategory = page.locator("xpath=//input[@id='Sub Category']");
    this.clinicalItemSubcategory = page.locator("xpath=//input[@id='Sub Category']");
    this.clinicalItemCollapsableAllergy1 = page.getByTestId("allergies").getByLabel("cellmaAccordionIcon");
    this.clinicalItemCollapsableAllergy2 = page.getByTestId("episodes[0].id").getByLabel("cellmaAccordionIcon");
    this.clinicalSubcategoryAllergy = page.locator("xpath=//input[@name='subCategory']");
    this.buttonSpecificAllergyName = page.locator("xpath=//button[@aria-label='Specific Allergy Name']");
    this.allergyStartDate = page.locator("xpath=//input[@id='episodes[0].startDate']");
    this.allergyEndDate = page.locator("xpath=//input[@id='episodes[0].endDate']");
    this.allergyReaction = page.locator("xpath=//input[@id='episodes[0].reaction']");
    this.ReactionSeverity = page.locator("xpath=//input[@id='episodes[0].reactionSeverity']");
    this.allergyTextArea = page.locator("xpath=//textarea[@id='episodes[0].allergyNotes']");

    //Procedure
    this.dateOfProcedure = page.locator(
      "xpath=//input[@name='dateOfProcedure']"
    );
    this.procedureType = page.locator("xpath=//input[@name='type']");
    this.procedureSite = page.locator("xpath=//input[@name='site']");
    this.performedByHP = page.locator(
      "xpath=//input[@name='performedByHPConsultants']"
    );
    this.procedureLevel = page.locator("xpath=//input[@name='level']");
    this.procedureStatus = page.locator("xpath=//input[@name='status']");
    this.procedureOutcome = page.locator("xpath=//input[@name='outcome']");
    this.linktoClinicLocation = page.locator(
      "xpath=//input[@name='linkToClinicLocation']"
    );
    this.linktoExistingCondition = page.locator(
      "xpath=//input[@name='linkToExistingCondition']"
    );
    this.linktoComplationDate = page.locator(
      "xpath=//input[@name='completionDate']"
    );
    this.procedureCheckboxDeviceRequired = page.locator(
      "xpath=//span[@data-testid='Device Required']"
    );
    this.procedureCheckboxPrivateRecord = page.locator(
      "xpath=//span[@data-testid='Private Record']"
    );
    this.procedureCheckBoxSetAsDefault = page.locator(
      "xpath=//span[@data-testid='Set As Default']"
    );
    this.procedureTextareaNotes = page.locator("xpath=//textarea[@id='Notes']");

    //Diagnosis
    this.onSetDate = page.locator("xpath=//input[@id='Onset Date']");
    this.diagnosedDate = page.locator("xpath=//input[@id='Diagnosed Date']");
    this.diagnosis1stSeenDate = page.locator(
      "xpath=//input[@id='1st Seen Date']"
    );
    this.status = page.locator("xpath=//input[@id='status']");
    this.severity = page.locator("xpath=//input[@id='Severity']");
    this.activity = page.locator("xpath=//input[@id='Activity']");
    this.countryOfDiagnosis = page.locator("xpath=//input[@id='Country of Diagnosis']");
    this.underlayingCause = page.locator("xpath=//input[@id='Underlying Cause']");
    this.complicationAndDiagnosis = page.locator("xpath=//input[@id='Complications and Other Diagnosis']");
    this.externalCause = page.locator("xpath=//input[@id='External Cause']");
    this.linkToProcedure = page.locator("xpath=//input[@id='Link to Procedure']");

    this.dateOfOutcome = page.locator("xpath=//input[@id='Date of Outcome']");
    this.frequency = page.locator("xpath=//input[@id='Frequency']");
    this.notes = page.locator("xpath=//textarea[@id='Notes']");
    this.private = page.locator("xpath=//label[@aria-label='Private Record']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.setAsDefault = page.locator("xpath=//label[@aria-label='Set as Default']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.addToFavourites = page.locator("xpath=//label[@aria-label='Add to Favourites']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.addToOrderSets = page.locator("xpath=//label[@aria-label='Add to Order Set']//input[@class='PrivateSwitchBase-input css-1m9pwf3']");
    this.save = page.locator("xpath=//button[@aria-label='Save']");
    this.saveCheckList = page.locator("xpath=//button[@aria-label='saveChecklist']");
    this.saveExtraDetails = page.locator("xpath=//button[@aria-label='saveCategoryExtraDetails']");
    this.delete = page.locator("xpath=//button[@data-testid='Delete']");
    this.deleteCertificate = page.locator("xpath=//button[@aria-label='Delete']");
    this.cancelDelete = page.locator("xpath=//button[@data-testid='Cancel']");
    this.confirmDelete = page.locator("xpath=//button[@data-testid='Ok']");
    this.deleteReason = page.locator("xpath=//textarea[@aria-label='Reason']");
    this.saveDeleteReason = page.locator("xpath=//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 css-6td7do']//button[@data-testid='Save']");

    //Medication Certificate
    this.confirm = page.locator("xpath=//button[@aria-label='Confirm']");
    this.limitation = page.locator("xpath=//input[@id='limitation']");
    this.limitationAppliedDate = page.locator("xpath=//input[@id='limitationApplied']");
    this.limitationValid = page.locator("xpath=//input[@id='limitationValidTo']");
    this.consultedCAA =page.locator("xpath=//label[@aria-label='consultedCAA']//span//input[@type='radio']")
    this.reasonForLimitation=page.locator("xpath=//textarea[@id='reasonForLimitations']")
    this.btnAddLimitation=page.locator("xpath=//button[@aria-label='Add']")
    this.linkShowLimitation=page.locator("xpath=//div[@class='MuiDataGrid-row MuiDataGrid-row--lastVisible MuiDataGrid-row--dynamicHeight']//div/a[text()='Show']")
    this.linkEditLimitation=page.locator("xpath=//div[@class='MuiDataGrid-row MuiDataGrid-row--lastVisible MuiDataGrid-row--dynamicHeight']//div/a[text()='Edit']")
    this.closeShowLimitationPopup=page.locator("xpath=//button[@aria-label='remove']//*[name()='svg']")
    this.deleteLimitationButton=page.locator("//button[@aria-label='remove']//*[name()='svg']")
    



    //Recommendations
    this.reviewDate = page.locator("xpath=//input[@id='Review Date']");

    //Interpretation
    this.interpretationOutcome = page.locator(
      "xpath=//input[@id='Interpretation Outcome']"
    );

    //PresentingProblems
    this.estimatedDate = page.locator("xpath=//input[@name='estimatedDate']");
    this.problemStatus = page.locator("xpath=//input[@id='Status']")
    this.problemOnset = page.locator("xpath=//input[@id='Onset']")
    this.problemSeverity = page.locator("xpath=//input[@id='Severity']")
    this.onsetDate = page.locator("xpath=//input[@id='Onset Date']")
    this.problemSeverity = page.locator("xpath=//input[@id='Severity']")
    this.problemRating = page.locator("xpath=//input[@id='Rating']")


         //Ed popup icons
         this.uploadFile= page.locator("xpath=//button[@aria-label='Upload File']")
         this.addedDocument= page.locator("xpath=//button[@aria-label='Added Documents']")
         this.addToTask= page.locator("xpath=//button[@aria-label='Add To Task']")
         this.addToWorklist= page.locator("xpath=//button[@aria-label='Add To Worklist']")
         this.addPathway= page.locator("xpath=//button[@aria-label='Add Pathway']")
         this.link= page.locator("xpath=//button[@aria-label='Link']")
         this.closePopup= page.locator("xpath=//button[@aria-label='cancelIcon']").nth(1)


        //Patient Scan
        this.scanType = page.locator("xpath=//input[@id='Type']")
        this.scanDate = page.locator("xpath=//input[@id='Scan Date']")
        this.scanArea = page.locator("xpath=//input[@id='Scan Area']")
        this.bmdScore = page.locator("xpath=//input[@id='BMD Score']")
        this.tScore = page.locator("xpath=//input[@id='T Score']")
        this.zScore = page.locator("xpath=//input[@id='Z Score']")
        this.machineName = page.locator("xpath=//input[@id='Machine Name']")

        //Investigations
        this.invStatus= page.locator("xpath=//input[@id='Status']")
        this.invOutstanding= page.locator("xpath=//label[@id='Outstanding Investigations-label']")
        this.invReason = page.locator("xpath=//input[@id='Reason']")
        this.invResult = page.locator("xpath=//input[@id='Results']")
        this.invOutcome = page.locator("xpath=//input[@id='Outcome']")
        this.invCritical = page.locator("xpath=//input[@id='Critical']")
        this.invLinkToDiagnosis = page.locator("xpath=//label[@id='Link to Diagnosis-label']")
        this.invDateOfUpload = page.locator("xpath=//input[@id='Date of Upload']")
        this.invPatCurrentLocation = page.locator("xpath=//input[@id='Patient Current Location']")
        this.invCompletedDate = page.locator("xpath=//input[@id='Completed Date']")
        this.invReviewDate = page.locator("xpath=//input[@id='Review Date']")
        this.invPriority = page.locator("xpath=//input[@id='Priority']")
        this.invRequestedBy = page.locator("xpath=//input[@id='Requested By']")
        this.invSendTo = page.locator("xpath=//input[@id='Send To']")
        this.invExtLocation = page.locator("xpath=//input[@id='External Location']")
        this.invCheckImagingRequest = page.locator("xpath=//span[@data-testid='For Imaging Request']//input[@value='false']")
        this.invUncheckImagingRequest = page.locator("xpath=//span[@data-testid='For Imaging Request']//input[@value='true']")
        this.invCheckLabRequest = page.locator("xpath=//span[@data-testid='For Lab Request']//input[@value='false']")
        this.invUncheckLabRequest = page.locator("xpath=//span[@data-testid='For Lab Request']//input[@value='true']")
        this.invCheckShareOnPortal = page.locator("xpath=//span[@data-testid='Share on Portal']//input[@value='false']")
        this.invUncheckShareOnPortal = page.locator("xpath=//span[@data-testid='Share on Portal']//input[@value='true']")
        this.invNotes = page.locator("xpath=//textarea[@id='Notes']")
        this.invShowSubtest = page.locator("xpath=//div[contains(text(),'Show Sub-Tests')]")
        this.invCratineValue = page.locator("xpath=//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-drv5b2']//input[@id='valueundefinedsubTest']")
        this.invCreatineTarget = page.locator("xpath=//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-drv5b2']//input[@id='targetnullsubTest']")
        this.invUreaValue = page.locator("xpath=//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-drv5b2']//input[@name='ureaicvValue']")
        this.invUreaTarget = page.locator("xpath=//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedEnd css-drv5b2']//input[@id='targetnullsubTest']")
        this.invSave = page.locator("xpath=//div[contains(text(),'Save')]")
        this.invDelete = page.locator("xpath=//div[contains(text(),'Delete')]")
        this.invRequestedBy = page.locator("xpath=//input[@id='Requested By']")


        //Overview
       // this.addClinicalItem = page.locator("xpath=//button[@aria-label='Add']")

    //Medication
    this.dose = page.locator("xpath=//input[@id='Dose']");
    this.Route = page.locator("xpath=//input[@id='Route']");
    this.days = page.locator("xpath=//input[@id='Days']");
    this.site = page.locator("xpath=//input[@id='Site']");
    this.prescribeBy = page.locator("xpath=//input[@id='Prescribed By']");
    this.startDate = page.locator("xpath=//input[@id='Start Date']");
    this.reviewDate = page.locator("xpath=//input[@id='Review Date']");
    this.stopDate = page.locator("xpath=//input[@id='Stop Date']");
    this.sideEffect = page.locator("xpath=//input[@name='sideEffect']");
    this.medicationStatus = page.locator("xpath=//input[@id='Status']");
    this.indication = page.locator("xpath=//input[@id='Indication']");
    this.stopReason = page.locator("xpath=//input[@id='Stopped Reason']");
    this.PGDPSD = page.locator("xpath=//input[@id='PGD/PSD']");
    this.medicationGradeForAdministrator = page.locator(
      "xpath=//input[@id='User grades that can administator medication-MAED']"
    );
    this.maxReffills = page.locator("xpath=//input[@id='Max Reffills']");
    this.quantity = page.locator("xpath=//input[@id='Quantity']");
    this.unit = page.locator("xpath=//input[@aria-label='Unit']");
    this.currentLocation = page.locator(
      "xpath=//input[@id='Current Location']"
    );
    this.linkToDiagnosis = page.locator(
      "xpath=//input[@id='Link to Diagnosis']"
    );
    this.adherent = page.locator("xpath=//input[@id='Adherent']");
    this.endoserment = page.locator("xpath=//input[@id='Endoserment']");
    this.forCondition = page.locator("xpath=//input[@id='For Condition']");
    this.priceCheckQuantity = page.locator(
      "xpath=//input[@id='Price check quantity']"
    );
    this.totalCost = page.locator("xpath=//input[@id='Total Cost']");
    this.notes = page.locator("xpath=//textarea[@aria-label='Notes']");

    //Medication Checkboxes
    this.prescribeAndSupply = page.locator(
      "xpath=//span[@data-testid='Prescription and supply']"
    );
    this.supply = page.locator("xpath=//span[@data-testid='Supply']");
    this.suitableForDelivery = page.locator(
      "xpath=//span[@data-testid='Suitable for Home Delivery']"
    );
    this.addToPrescription = page.locator(
      "xpath=//span[@data-testid='Add to Prescription']"
    );
    this.setAsDefault = page.locator(
      "xpath=//span[@data-testid='Set as Default']"
    );
    this.repeatable = page.locator("xpath=//span[@data-testid='Repeatable']");
    this.addToFavourite = page.locator(
      "xpath=//span[@data-testid='Add to favourites']"
    );
    this.privateRecord = page.locator(
      "xpath=//span[@data-testid='Private Record']"
    );
    this.addToOrderSet = page.locator(
      "xpath=//span[@data-testid='Add to order set']"
    );
    this.saveCategoryExtraDetails = page.locator("xpath=//button[@aria-label='saveCategoryExtraDetails']");
    this.saveCustomizableViewbutton=page.locator("xpath=//button[@aria-label='saveExtraDetails']")
  }

  //////////////////////////////////TEXTBOX FILLERS//////////////////////////////////////////

  //Fill Outcome Date
  async enterDateOfOutcome(outc_date) {
    await typeText(this.page, this.dateOfOutcome, outc_date);
  }

  //Fill Ouutome Notes
  async enterClinicalItemNotes(proc_notes) {
    await typeText(this.page, this.notes, proc_notes);
  }

  async enterDeleteReason(reason) {
    await typeText(this.page, this.deleteReason, reason);
  }

  /////////////////////////////////BUTTON CLICKS///////////////////////////////////////////////

  //Click on Collapsable button on Extra Details popup
  async clickOnClincialItemCollapsable() {
    await clickElement(this.page, this.clinicalItemCollapsable);
  }

  async clickOnClincialItemCollapsableAllergy1() {
    await clickElement(this.page, this.clinicalItemCollapsableAllergy1);
  }

  async clickOnClincialItemCollapsableAllergy2() {
    await clickElement(this.page, this.clinicalItemCollapsableAllergy2);
  }

  async clickOnclinicalSubcategoryAllergy() {
    await this.clinicalSubcategoryAllergy.click();
    await this.page.getByRole("option", { name: "Allergy Subsection" }).click();
  }

  async clickOnSpecificAllergyName() {
    await clickElement(this.page, this.buttonSpecificAllergyName);
  }

  async enterAllergyStartDate(date) {
    await typeText(this.page, this.allergyStartDate, date);
  }

  async enterAllergyEndDate(date) {
    await typeText(this.page, this.allergyEndDate, date);
  }
  async selectReaction(eli_text) {
    await selectFromDropdown(this.page, this.allergyReaction, eli_text);
  }
  async selectReactionSevirity(alrg_reaction_severity) {
    await selectFromDropdown(
      this.page,
      this.ReactionSeverity,
      alrg_reaction_severity
    );
  }
  async enterallergyTextArea(alrg_notes) {
    await typeText(this.page, this.allergyTextArea, alrg_notes);
  }

  ///////////Procedure Functions////////////////////

  async enterDateOfProcedure(date) {
    await typeText(this.page, this.dateOfProcedure, date);
  }

  async selectProcedureType(proc_type) {
    await selectFromDropdown(this.page, this.procedureType, proc_type);
  }

  async selectProcedureSite(proc_site) {
    await selectFromDropdown(this.page, this.procedureSite, proc_site);
  }

  async selectProcedureLevel(proc_procedure_level) {
    await selectFromDropdown(
      this.page,
      this.procedureLevel,
      proc_procedure_level
    );
  }

  async selectProcedureStatus(pacr_status) {
    await selectFromDropdown(this.page, this.procedureStatus, pacr_status);
  }

  async selectProcedureOutcome(proc_outcome) {
    await selectFromDropdown(this.page, this.procedureOutcome, proc_outcome);
  }

  async selectandAddPerformedByGP(HPName) {
    this.itemName = clinicalItemName;
    await selectFromSearchResults(
      this.page,
      this.performedByHP,
      HPName,
      this.addClinicalItem
    );
  }

  async selectLinkToClinicLocation(HPName) {
    this.itemName = clinicalItemName;
    await selectFromSearchResults(
      this.page,
      this.performedByHP,
      HPName,
      this.addClinicalItem
    );
  }

  async selectProcedureCheckboxSetAsDefault() {
    await this.procedureCheckBoxSetAsDefault.click();
  }

  async selectProcedureCheckboxPrivateRecord() {
    await this.procedureCheckboxPrivateRecord.click();
  }

  //Click on Save Medication button on Extra Details popup
  async clickOnSave() {
    await clickElement(this.page, this.save);
  }

  async clickOnSaveCheckList() {
    await clickElement(this.page, this.saveCheckList);
  }

  async clickOnSaveExtraDetails() {
    await clickElement(this.page, this.saveExtraDetails);
  }

  async clickOnDelete() {
    await clickElement(this.page, this.delete);
  }

  async clickOnDeleteCertificate() {
    await clickElement(this.page, this.deleteCertificate);
  }

  async clickOnCancelDelete() {
    await clickElement(this.page, this.cancelDelete);
  }

  async clickOnConfirmDelete() {
    await clickElement(this.page, this.confirmDelete);
  }

  async clickOnSaveDeleteReason() {
    await clickElement(this.page, this.saveDeleteReason);
  }

  ///////////////////////////////CHOOSE STATIC DROPDOWN ITEM//////////////////////////////////

  async selectClinicalItemSubcategory(subcategory) {
    await selectFromDropdown(this.page,this.clinicalItemSubcategory,subcategory);
  }

  async selectFrequency(outc_frequency) {
    await selectFromDropdown(this.page, this.frequency, outc_frequency);
  }

  async enterOnSetDate(date) {
    await typeText(this.page, this.onSetDate, date);
  }

  //Presenting Problems

  async clickOnestimatedDate() {
    await clickElement(this.page, this.estimatedDate);
  }
  async clickOnactualDate(){
    await clickElement(this.page, this.actualDate)
}

  async selectProblemStatus(prp_status) {
    await selectFromDropdown(this.page, this.problemStatus, prp_status);
  }
  async selectProblemOnset(prp_onset) {
    await selectFromDropdown(this.page, this.problemOnset, prp_onset);
  }
  async selectProblemSeverity(prp_severity) {
    await selectFromDropdown(this.page, this.problemSeverity, prp_severity);
  }

  async enterOnsetDate(prp_date_of_onset)
    {
        await typeText(this.page, this.onsetDate, prp_date_of_onset);
    }
    async enterRating(prp_rating)
    {
        await typeText(this.page, this.problemRating,prp_rating );
    }

    async clickOnEdPopup(){
      await this.uploadFile.click()
      await this.closePopup.click()
      await this.addedDocument.click()
      await this.closePopup.click()
      await this.addToTask.click()
      await this.closePopup.click()
      await this.addToWorklist.click()
      await this.closePopup.click()
      await this.addPathway.click()
      await this.closePopup.click()
      await this.link.click()
      await this.closePopup.click()

  }
  
  //Overview

  async selectandAddOverview() {
    //this.itemName=clinicalItemName;
    await clickElement(this.page, this.addClinicalItem)
   // await this.addClinicalItem.click() 
}
 

    //Patient Scans

    async selectScanType(type)
    {
        await selectFromDropdown(this.page, this.scanType, type);
    }

    async selectScanArea(area)
    {
        await selectFromDropdown(this.page, this.scanArea, area );
    }

    async enterScanDate(date) {
      await typeText(this.page, this.scanDate, date);
  }
  async enterBmdScore(BMD) {
    await typeText(this.page, this.bmdScore,BMD );
}

async enterTScore(T) {
    await typeText(this.page, this.tScore,T );
}
async enterZScore(Z) {
    await typeText(this.page, this.zScore, Z);
}
async selectMachineName(mname)
{
    await selectFromDropdown(this.page, this.machineName, mname );
}
  //Medical Certificate
  async clickOnConfirm() {
    await clickElement(this.page, this.confirm);
  }

  async selectLimitations(Limitation) {
    await selectFromDropdown(this.page, this.limitation, Limitation);
  }

  async enterLimitationAppliedDate(Date) {
    await typeText(this.page, this.limitationAppliedDate, Date);
  }

  async enterLimitationValidToDate(Date) {
    await typeText(this.page, this.limitationValid, Date);
  }

  async clickOnConsultedCAA()
  {
    await clickElement(this.page, this.consultedCAA)
  }
  async enterReasonForLimitation(reasonForLimitation)
  {
    await typeText(this.page, this.reasonForLimitation,reasonForLimitation)
  }
  async clickOnAddLimitationButton()
  {
    await clickElement(this.page, this.btnAddLimitation)
  }
  async clickOnShowLimitationLink()
  {
    await clickElement(this.page,this.linkShowLimitation)
  }
  async closeOnClosePopupButton()
  {
    await clickElement(this.page,this.closeShowLimitationPopup)
  }
  async clickOnEditLimitationLink()
  {
    await clickElement(this.page,this.linkEditLimitation)
  }




  //Medication Extra Details
  async enterOnDose(dose) {
    await this.dose.clear();
    await typeText(this.page, this.dose, dose);
  }

  async selectRoute(Route) {
    await selectFromDropdown(this.page, this.Route, Route);
  }

  async enterDays(days) {
    await typeText(this.page, this.days, days);
  }

  async selectSite(site) {
    await selectFromDropdown(this.page, this.site, site);
  }

  async selectPrescribeBy(prescribeBy) {
    await selectFromDropdown(this.page, this.prescribeBy, prescribeBy);
  }

  async enterStartDate(startDate) {
    await typeText(this.page, this.startDate, startDate);
  }
  async enterReviewDate(reviewDate) {
    await typeText(this.page, this.reviewDate, reviewDate);
  }

  async enterStopDate(medi_stop_date) {
    await typeText(this.page, this.stopDate, medi_stop_date);
  }

  async selectSideEffects(mse_text) {
    await selectFromDropdown(this.page, this.sideEffect, mse_text);
  }
  async selectStatus(pacr_status) {
    await selectFromDropdown(this.page, this.medicationStatus, pacr_status);
  }
  async selectIndication(meded_value) {
    await selectFromDropdown(this.page, this.indication, meded_value);
  }
  async selectStoppedReason(medi_stopped_reason_eli_text) {
    await selectFromDropdown(
      this.page,
      this.stopReason,
      medi_stopped_reason_eli_text
    );
  }
  async selectPGDPSD(meded_value_PGD) {
    await selectFromDropdown(this.page, this.PGDPSD, meded_value_PGD);
  }
  async enterMedicationGradeForAdministrator(medicationGradeForAdministrator) {
    await typeText(
      this.page,
      this.medicationGradeForAdministrator,
      medicationGradeForAdministrator
    );
  }
  async selectMaxReffills(maxReffills) {
    await selectFromDropdown(this.page, this.maxReffills, maxReffills);
  }
  async selectQuantity(meded_value_Quantity) {
    await this.quantity.clear();
    await typeText(this.page, this.quantity, meded_value_Quantity);
  }
  async enterUnit(unit) {
    await typeText(this.page, this.unit, unit);
  }
  async selectCurrentLocation(currentLocation) {
    await selectFromDropdown(this.page, this.currentLocation, currentLocation);
  }
  async enterLinkTiDiagnosis(pacr_que_name_Diagnosis) {
    await selectFromDropdown(
      this.page,
      this.linkToDiagnosis,
      pacr_que_name_Diagnosis
    );
  }
  async selectAdherent(meded_value_Adherent) {
    await selectFromDropdown(this.page, this.adherent, meded_value_Adherent);
  }
  async selectEndoserment(paprd_endorsement) {
    await selectFromDropdown(this.page, this.endoserment, paprd_endorsement);
  }
  async selectForCondition(que_display_text) {
    // await this.forCondition.click()
    // await this.forCondition.type(que_display_text)
    // await this.page.getByRole('option', { name: que_display_text }).click()
    await selectFromDropdown(this.page, this.forCondition, que_display_text);

    //await selectFromDropdown(this.page, this.forCondition, que_display_text)
  }
  async enterPriceCheckQuantity(meded_value_Price_check_quantity) {
    await typeText(
      this.page,
      this.priceCheckQuantity,
      meded_value_Price_check_quantity
    );
  }
  async enterNotes(medi_notes) {
    await typeText(this.page, this.notes, medi_notes);
  }

  //Methods for Medication Checkboxes
  async clickOnPrescribeAndSupply() {
    await this.prescribeAndSupply.click();
  }
  async clickOnSupply() {
    await this.supply.click();
  }
  async clickOnSuitableForDelivery() {
    await this.suitableForDelivery.click();
  }
  async clickOnAddToPrescribe() {
    await this.addToPrescription.click();
  }
  async clickOnSetAsDefault() {
    await this.setAsDefault.click();
  }
  async clickOnRepeatable() {
    await this.repeatable.click();
  }
  async clickOPrivateRecord() {
    await this.privateRecord.click();
  }

  async enterDiagnosedDate(date) {
    await typeText(this.page, this.diagnosedDate, date);
  }
  async enterDiagnosis1stSeenDate(date) {
    await typeText(this.page, this.diagnosis1stSeenDate, date);
  }
  async selectStatus(statusName) {
    await selectFromDropdown(this.page, this.status, statusName);
  }

  async selectSeverity(severityName) {
    await selectFromDropdown(this.page, this.severity, severityName);
  }
  async selectActivity(activityName) {
    await selectFromDropdown(this.page, this.activity, activityName);
  }
  async selectCountryOfDiagnosis(countryName) {
    await selectFromDropdown(this.page, this.countryOfDiagnosis, countryName);
  }

  async searchAndSelectUnderlayingCause(UnderlyingName) {
    await selectFromSearchResults(
      this.page,
      this.underlayingCause,
      UnderlyingName
    );
  }

  async searchAndSelectComplicationsAndDiagnosis(complicationsAndDagnosisName) {
    await selectFromSearchResults(
      this.page,
      this.complicationAndDiagnosis,
      complicationsAndDagnosisName
    );
  }
  async searchAndSelectExternalCause(externalCauseName) {
    await selectFromSearchResults(
      this.page,
      this.externalCause,
      externalCauseName
    );
  }
  async searchAndSelectLinktoProcedure(linkToProcedureName) {
    await selectFromSearchResults(
      this.page,
      this.linkToProcedure,
      linkToProcedureName
    );
  }

  //Recommendations
  async enterReviewDate(date) {
    await typeText(this.page, this.reviewDate, date);
  }

  //Interpretation
  async enterInterpretationOutcome(inte_outcome_eli_text) {
    await selectFromDropdown(
      this.page,
      this.interpretationOutcome,
      inte_outcome_eli_text
    );
  }

  //Investigation
  async selectInvStatus(status) {
    await selectFromDropdown(this.page,this.invStatus,status);
  }

  async selectInvOutstanding(outstanding)
  {
    await selectFromDropdown(this.page,this.invOutstanding,outstanding);
  }

  async selectInvReason(reason)
  {
    await selectFromDropdown(this.page,this.invReason,reason)
  }

  async enterInvResult(result)
  {
    await typeText(this.page, this.invResult, result);
  }

  async selectInvOutcome(outcome)
  {
    await selectFromDropdown(this.page,this.invOutcome,outcome)
  }

  async selectInvCritical(critical)
  {
    await selectFromDropdown(this.page,this.invCritical, critical)
  }
 
  async selectInvDiagnosisLink(diagnosis)
  {
    await selectFromDropdown(this.page,this.invLinkToDiagnosis, diagnosis)
  }

  async enterInvDateOfUpload(date)
  {
    await typeText(this.page,this.invDateOfUpload, date)
  }

  async enterInvCompletedDate(dateCompleted)
  {
    await typeText(this.page,this.invCompletedDate, dateCompleted)
  }

  async enterInvReviewDate(dateReview)
  {
    await typeText(this.page,this.invReviewDate, dateReview)
  }

  async selectInvPatLocation(location)
  {
    await selectFromDropdown(this.page,this.invPatCurrentLocation, location)
  }

  async selectInvPriority(priority)
  {
    await selectFromDropdown(this.page,this.invPriority, priority)
  }

  async selectInvSendTo(sendTo)
  {
    await selectFromDropdown(this.page,this.invSendTo, sendTo)
  }

  async selectInvExtLocation(extLocation)
  {
    await selectFromDropdown(this.page,this.invExtLocation, extLocation)
  }

  async enterInvNotes(notes)
  {
    await typeText(this.page, this.invNotes, notes);
  }

  async clickShowSubtest()
  {
    await clickElement(this.page, this.invShowSubtest);
  }
  async enterCreatineValue(value1)
  {
    await typeText(this.page, this.invCratineValue, value1);
  }
  async enterUreaValue(value2)
  {
    await typeText(this.page, this.invUreaValue, value2);
  }

  async enterCreatineTarget(target1)
  {
    await typeText(this.page, this.invCreatineTarget, target1);
  }

  async enterUreaTarget(target2)
  {
    await typeText(this.page, this.invUreaTarget, target2);
  }

  async saveInvestigation()
  {
     await clickElement(this.page, this.invSave)
  }

  async selectForLabRequest()
  {
    await clickElement(this.page, this.invCheckLabRequest)
  }

  async deselectForLabRequest()
  {
    await clickElement(this.page, this.invUncheckLabRequest)
  }

  async selectForImagingRequest()
  {
    await clickElement(this.page, this.invCheckImagingRequest)
  }

  async deselectForImagingRequest()
  {
    await clickElement(this.page, this.invUncheckImagingRequest)
  }

  async selectShareOnPortal()
  {
    await clickElement(this.page, this.invUncheckShareOnPortal)
  }

  async deselectShareOnPortal()
  {
    await clickElement(this.page, this.invUncheckShareOnPortal)
  }
  async clickOnSaveCustomizableButton()
  {
    await clickElement(this.page,this.saveCategoryExtraDetails)
     // this.saveCustomizableViewbutton)
  }



}



module.exports = ClinicalExtraDetails;