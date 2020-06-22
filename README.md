# Managed HTML5 Application Sample

## Build custom Fiori User Experience
The objective of this reference application is to showcase the ease of building custom frontends for SAP applications – Bring the ease of use of HTML5 Application on SAP Cloud Platfrom Neo Environment to the Multi-Cloud environment.


## Prerequisites

### Entitlements

Make sure that you have an account with below entitlements for your sub account

| Service                           | Plan       | Number of Instances |
|-----------------------------------|------------|:-------------------:|
| Destination                       | lite       |          2          |
| HTML5 Application                 | app-host   |          2          |

### Subscriptions
Make sure that the below susciptions are active for your sub account <br/>
 a. Business Application Studio <br/>
 b. Portal <br/>
 
 #### Steps
1. In the Subaccount Overview page, Expand Security and Click on Trust Configuration
1.  Click on "Subscriptions"
2.  Search for "Portal"
2.  Click on "Portal"
1.  Click on "Subscribe"
2.  Click on your subaccount
3. Similarly, subscribe to Business Application Studio.
     ![Subscription](/doc/img/Subscription.png)
 
 ### Role Collections
 To access Business Application Studio, users will the role "Business_Application_Studio_Developer".
 
1. In the Subaccount Overview page, Expand Security and Click on Trust Configuration
2. Click on "SAP ID Service"
1.  Enter Email Address and Click on "Show Assignments"
3. Click on "Add User" to add the user to the SAP ID Service (if user is not already present in the IDP)
1.  Click on "Assign Role Collection"
2. Select "Business_Application_Studio_Developer"
2.  Click on "Assign Role collection"
    ![AssignRoleCollection](/doc/img/AssignRoleCollection.png)


### Destination Setup
1. You have access to SAP Business Application Studio. See Set Up SAP Business Application Studio for Development.
2. A destination to ES5 is configured in the subaccount from which you accessed the SAP Business Application Studio. See:
   
    a. Create an Account on the Gateway Demo System using the steps [here] (https://developers.sap.com/tutorials/gateway-demo-signup.html)
   
    b. Create a Destination within the Cloud Foundry Environment using the steps [here] (https://developers.sap.com/tutorials/cp-cf-create-destination.html), and set the ES5 destination properties as follows:
    Common properties
    - Name: ES5
    - Type: HTTP
    - Description: ES5
    - URL: https://sapes5.sapdevcenter.com/sap/opu/odata/iwbep/GWSAMPLE_BASIC
    - Proxy Type: Internet
    - Authentication: BasicAuthentication
    - User Name: Your ES5 Gateway user
    - Authentication: Your ES5 Gateway password
    - Additional Properties:
    - HTML5.DynamicDestination: true (Type this additional property manually as it is not available in the drop-down list)
    - sap-client: 002
    - WebIDEEnabled: true
    - WebIDESystem: ES5
    - WebIDEUsage: odata_abap
        ![Destination](/doc/img/Destination.png)
    

## Build and Deploy of the application

1. Open the Business Application Studio from Subaccount> Subscriptions
2. Login to the Application using your CF account login credentials
3. Click on "Create Dev Space"
4. Enter the name of the space and Choose "SAP Fiori" and select "Launchpad Module" from Additional Extensions
    ![BizappDevSpace](/doc/img/BizappDevSpace.png)
5. Once the devspace is created, open it.
7. Go to View-> Select "Find Command"
    ![FindCommand](/doc/img/FindCommand.png)
2. Search for "CF Login"
3. Select for "CF: Login on to Cloud Foundry"
    ![CFLoginBizapp](/doc/img/CFLoginBizapp.png)
4. Enter CF API endpoint
5. Enter "Email" and "Password" when prompted
6. Select your org and space to login to Cloud Foundry
6. Go to View > Find Command
7. Search for "Clone" and select the command "Git:Clone"
8. In the pop up, enter the git repository [link](../../)
9. Once the cloning is complete, you can view the project in 'Explorer'
10. Go to Terminal > New Terminal
11. In the terminal window, navigate to the project root folder
12. Run the command - ```mbt build```
13. Once the build is complete, expand the mta_archives folder in the project root folder.
18. Right click on the cloud-extension-html5-sample-1.0.0.mtar and select " Deploy MTA Archive"
19. Now, run the command ```cf html5-list -d -u```. Open the url corresponding to the application.
![BuildAndDeploy](/doc/img/BuildAndDeploy.png)

## Known Issues

No known issues.

## How to Obtain Support

In case you find a bug, or you need additional support, please open an issue here in GitHub.

