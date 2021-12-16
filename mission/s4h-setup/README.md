# Set Up the SAP S/4HANA System

## Introduction

In this section we learn how to activate an API oData service in a SAP S/4HANA system, create a user and assign the necessary roles and authorization objects.

**Persona:** S/4HANA Administrator

## Step-by-Step

***Hint:** The following screenshots are done with SAP GUI 7.50 - by using SAP GUI 7.60 the usage could differ, for example tick button instead of a continue button and so on.*

### Activate oData Service
1. Log on to the SAP S/4HANA system using SAP GUI with your adminstrator user.
2. Call transaction /n/IWFND/MAINT_SERVICE.
3. Choose **Add Service**

   ![Add Service](./images/add-service.png)
4. In the Add Service screen enter the following values:
   1. System Alias = LOCAL
   2. Technical Service Name = API_BU*
   3. Press enter - you should see the API_BUSINESS_PARTNER in the list box.
   
   ![Add selected Service](./images/add-selected-service.png)


5. Check the box of API_BUSINESS_PARTNER and click on **Add Selected Service**
 
   ![Add selected Service](./images/add-selected-service2.png)

6. The **Add Service** screen opens
   1. Specify **Package Assignment** e.g. $TMP by clicking on Local Object
   2. Enable the checkbox for **Enable OAuth for Service**
   3. Choose Continue to activate the changes
   4. Choose Continue to confirm the message box
   
   ![Add service](./images/add-service2.png)

**Result:** The API_BUSINESS_PARTNER is now activated and you can leave the transaction.

### Create User and assign Roles and Authorization Objects

#### **A: Create User**
In this section we will create a new user in the SAP S/4HANA system and assign the SAP_BR_BUPA_MASTER_SPECIALIST role to him.  

1. Call Transaction SU01
   1. Enter a user ID
   2. Choose Create

    ![Create User](./images/CreateUserS4.png)
 
2.  Do the following:
    1.  Select the **Address** tabulator
    2.  Set the **Last name**
    3.  Set a valid e-mail address. 
        
        ***Important:** this email is the principal for the SSO communication that we will configure in a later section*
    4. Select the **Logon Data** tabulator.

    ![Set Address](./images/MaintainUser1.png)

3. Logon Data Tabulator:
    1. Select User Type = System
    2. Set a Password
    3. Repeat the Password
    4. Select the Roles Tab     
    
    ![Set Password](./images/MaintainUser2.png)
4. Roles Tabulator:
   1. Select the first empty row in the the Roles list and click on add Roles
   
   ![Add Role](./images/add-role.png)

5. Find Role
   1. In the Single Role field enter **SAP_BR_BUPA\*** 
   2. Choose Enter
   
    ![Search Role](./images/SAP-BR-BUPA.png)

6. Role Selection:
   1. Select the SAP_BR_BUPA_MASTER Specialist role
   2. Choose enter/copy.
   
       ***Hint:** This role is necessary to get access to the Business Partner data and the Business Partner Fiori application*
   
   ![add BUPA Master Specialist](./images/add-SAP-BR-BUPA.png)

7. Maintain Users:
   1. Choose Save
   
   ![Save User](./images/save-user.png) 



####  **B: Create Authorization Object for oData service**
In this section we generate a custom authorization object which is necessary to give the user access to the Gateway and to the Business Partner oData service.

1. Call Transaction PFCG
   1. Enter a new Role name 
   2. Choose Single Role

   ![PFCG](./images/role-maintainance1.png) 

2. Set Authorizations
   1. Choose Save
   2. Select the Authorization tabulator
   3. Choose the icon at **Change Authorization Data**
   
   ![Authorization](./images/RoleAutha.png)

3.  Choose Template
    1.  Select the Template for Gateway users (/IWFND/RT_GW_USER)
    2.  Choose **Apply Template** and click on **Save**

    ![Apply Template](./images/choose_template.png)

4. Choose Status and then **Execute** to assign the Authorization

    ![Assign Authorization](./images/Assign-Authorization.png)

5. Choose Generate (Shift+F5) 
   ![Assign Authorization](./images/Assign-Authorization2.png)

6. Menu
    1. Select the Menu tabulator
    2. Choose Transaction and select **Authorization Default**
   
   ![Menu](./images/Authorization_default.png)

7. Set Service
   1. Select **TADIR Service** as Authorization Default - since SAP S/4HANA version 2020 select **IWSG SAP Gateway: Service Groups Metadata** and skip step 2
   2. Select **IWSG SAP Gateway: Service Groups Metadata** as Object Type 
   3. Open the Object list

   ![Object Type](./images/tadir1.png)

8. Object List 
   1. Select the object ZAPI_BUSINESS_PARTNER_0001
   2. Choose **Confirm**.

   ![Object List](./images/object2.png)

9.  Copy the TADIR service to the Menu and press save.
      
      ![Object](./images/copy-object.png)

10. User Setup
    1.  Save the Authorization Object
    2.  Select the User tabulator
    3.  Enter or select the user ID you have created in section A
    4.  Choose **User Comparision**
   
    ![User Comparsion](./images/user-comparison.png)
  
11. Complete Comparion
    
    ![User Comparions](./images/complete-comparison.png)

12. Choose Save and you have finished the setup of the user profile     


***Hint:** If the Authentication tabulator turns to red, select this tabulator and select again **Change Authorization Data** - click again on Generate (Shift+F5) - Choose **Save***

### Test the API_BUSINESS_PARTNER_SRV

To see if the setup was done correctly call the Business Partner API with the new user. 

* Call Transaction /N/IWFND/MAINT_SERVICE
    1. Double-click on ZAPI_BUSINESS_PARTNER
    2. Choose Call Browser
   
    ![Test Bupa](./images/test-bupa1.png)
    
    Hint: If you use a CAL system, kindly check and use the relevant IP address instead of the default system host name as the host name has to be resolvable by the browser.

* Enter the credentials of the user we have created. You should then see the structure of the BusinessPartner oData service.

    ![Test Bupa](./images/test-bupa2.png)

*  Change the end ot the URL to ..../sap/API_BUSINESS_PARTNER/A_BusinessPartner/?$format=xml. You should now see a list of Business Partners.

This completes this mission section.



## Summary

You have activated an API in the S/4 on-premise system and created a user with the necessary roles for CRUD operations of Business Partner data and to access the API_BUSINESS_PARTNER_SRV oData service.

***Hint:** the simplest way for adding additional users with the same roles is just to copy this user profile in the SU01 transaction*

[see also SAP Help: Activate and Maintain Services](https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/202009.002/en-US/bb2bfe50645c741ae10000000a423f68.html)
