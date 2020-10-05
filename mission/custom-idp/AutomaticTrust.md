# Configuring Custom Identity Provider

## Introduction

In this section, we would configure a custom Identity Provider which has the users/employees to login to the SAP Cloud Platform Account.
Depending on your global account, you might see the default identity provider, which is configured automatically. This cannot be deleted, it can only be enabled or disabled. 

**Persona:** SCP Administrator


## Step-by-Step

Use your SAP Cloud Platform Identity Authentication service tenant as an identity provider or a proxy to your own identity provider hosting your business users. This method avoids the upload and download of SAML meta data by using Open ID Connect (OIDC) to establish trust.

### Register SAP Cloud Platform Subaccount in the Custom Identity Provider

You can manage trust configurations for a global account only if you have created the global account or if you are an SCP Administrator of the account and you are an Administrator in your company's Identity and Authentication Tenant(SAP IAS).

Establishing the trust between your company's IDP could be done in an automatic way.
1. In the Cloud Platform cockpit of your subaccount select Security - Trust Configuration 
2. Click on 'Establish Trust'

![Establish Trust](./images/CustIDP_AutoTrust.png)

4. In the popup select your Identity provider.

   ***!Hint:** If your Identity provider is not visible then the SAP Cloud Platform Account and the IDP have been created with different Customer IDs - in that case please follow the steps for the manual setup with SAML 2.0: [Link to Manual Setup Guide](./README.md).*

5. Click on Establish Trust

   ![Establish Trust](./images/CustIDP_EstablishTrust.png)

    At the Trust Configuration screen you should see your custome IDP tenant.

   ![Custom IDP](./images/CustIDP_Tenant.png)

6. Now, open your company's Identity and Authentication Tenant (SAP IAS) and login to the same.
7. Select Application in the Application & Resources section.
8. You find a generated application starting with XSUAA_. Select this application
9. Click on the header of the application configuration to change the name 
     ![Application](./images/CustIDP_AutoApplication.png)

10. Change the display name to a meaningful entry and press Save.
    
     ![Application](./images/CustIDP_changeApplicationName.png)

11. Select the OpenID Connect Configuration section.

    ![OpenID Configuration](./images/CustIDP_openId1.png)
12. Change the name and press save.


    ![OpenID Configuration](./images/CustIDP_openId.png)

13. Check if the Subject Name Identifier is set to E-mail. If not change it.
    ![Subject Name Identifier](./images/CustIDP_subjectName.png) 

14. Select Assertion Attributes
    
   ![Assertion Attributes](./images/CustIDP-addAssertion.png) 

15. Click on Add and select the Groups attribute, set the assertion attribute to "Groups" with capital G. Click on save
 
   ![Set Assertion Group](./images/CustIDP-addGroupAssertion.png)  

16. In the Home view select User Groups

   ![User Groups](./images/CustIDP-addGroups.png)

17. Create a Extension Developer group. 
    * Click on "+ Add"
    * Set Name = ExtensionDeveloper
    * Set Display name = ExtensionDeveloper
    * Enter a description
    * Press save

   ![User Groups](./images/CustIDP-addGroups2.png)


18.  Create a Extension Administrator group.     
     * Click on "+ Add"
     * Set Name = ExtensionAdministrator
     * Set Display name = ExtensionAdministrator
     * Enter a description
     * Press save
  
19. Map the group to a user which should have the UX extension developer role. 
    * Open User Management
    * Select your user  
    * Click on User Groups
    * Click on "Assign Groups"
   
   ![User Groups](./images/CustIDP-assertGroup.png)

20. Check the ExtensionDeveloper group and click on save.
   
   ![User Groups](./images/CustIDP-assertGroup2.png)

    Repeat the last 2 steps for all user that needs the extension developer privilege.

21. Repeat steps 19&20 by mapping the **ExtensionAdministrator** group to all users that should have the UX extension administrator role. 

### Map IDP Groups with Role Collection

1. Go back to your SAP Cloud Platform subaccount
2. Select the Trust Configuration in the Security section.
3. Now let us disable the default SAP Identity Provider. Click on Edit button of SAP ID Service.
4.  Change Status to Inactive.

    ![Disable DefaultIDP](./images/CustIDP-disableDefaultIDP.png)
5.  Click on Save button.

6. In the Security Menu select 'Role Collections' and then click on the Extension_UX_Administrator collection.
   
   ![Role Mapping](./images/CustIDP_RoleMapping1a.png)

7. Click on Edit

   ![Role Mapping](./images/CustIDP_RoleMapping2a.png)

8. Select User Groups then enter the ExtensionAdministrator as name and select your 'Custom iAS' tenant as Identity Provider. Press Save.

   ![Role Mapping](./images/CustIDP_RoleMapping3a.png)

9. Repeat steps 7-8 by selecting the Extension_UX_Developer collection and map it to the ExtensionDeveloper user group.

   ![Role Mapping](./images/CustIDP_RoleMapping4a.png)   

10. To test the configuration open the SAP Business Application Studio in Subscriptions and see if your are able to login with your custom IDP. (If you have already a open session restart your browser).


### References
Check the [official SAP Help documentation](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/161f8f0cfac64c4fa2d973bc5f08a894.html).
    


