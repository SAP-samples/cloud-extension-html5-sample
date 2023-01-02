# Managed HTML5 Application Sample


SAP Business Technology Platform enables you to access and run HTML5 Applications in a cloud environment without the need to maintain your own runtime infrastructure.

HTML5 Applications consist of static content that runs on a browser. You can develop your applications - either in SAP Business Application Studio, or in your own IDE (integrated development environment) - and deploy them to the HTML5 Application Repository.

Depending on your backend application setup, you either configure the destinations during development, or define them after deploying the application. Finally, to consume the applications, you can create a site in SAP Cloud Portal Service, build the URL, and define custom domains.

For more information, please refer to the documentation on [SAP Help Portal](https://help.sap.com/viewer/29badeeee3684338b2e870139bdc4d86/Cloud/en-US/c1b9d6facfc942e3bca664ae06387e9b.html).

## Build Custom SAP Fiori User Experience
The objective of this reference application is to showcase the ease of building custom frontends for SAP applications – Bring the ease of use of HTML5 Application on SAP Business Technology Platform Neo Environment to the Multi-Cloud environment.


## Prerequisites

### Entitlements

Make sure that you have an account with below entitlements for your sub account

| Service                           | Plan       | Number of Instances |
|-----------------------------------|------------|:-------------------:|
| Destination                       | lite       |          2          |
| HTML5 Application                 | app-host   |          2          |

### Subscriptions
Make sure that the below subscriptions are active for your sub account <br/>
 a. Business Application Studio <br/>
 b. Portal <br/>
 
 #### Steps
1. From the Subaccount Overview page, click on the tab "Subscriptions"
2. Search for "Portal"
3. Click on "Portal"
4. Click on "Subscribe"
5. Click on your subaccount
6. Similarly, subscribe to Business Application Studio.
     ![Subscription](/doc/img/Subscription.png)
 
 ### Role Collections
 To access Business Application Studio, users will the role "Business_Application_Studio_Developer".
 
1. In the Subaccount Overview page, Expand Security and Click on Trust Configuration
2. Click on "SAP ID Service"
3.  Enter Email Address and Click on "Show Assignments"
4. Click on "Add User" to add the user to the SAP ID Service (if user is not already present in the IDP)
5.  Click on "Assign Role Collection"
6. Select "Business_Application_Studio_Developer"
7.  Click on "Assign Role collection"
    ![AssignRoleCollection](/doc/img/AssignRoleCollection.png)


### Destination Setup
A destination to ES5 is to be configured in the subaccount from which you will access the SAP Business Application Studio.
To do this, please follow the steps below:

1. Create an Account on the Gateway Demo System using the steps [here](https://developers.sap.com/tutorials/gateway-demo-signup.html)
2. Create a Destination within the Cloud Foundry Environment using the steps [here](https://developers.sap.com/tutorials/cp-cf-create-destination.html), and set the ES5 destination properties as follows:
    Common properties
    - Name: ES5
    - Type: HTTP
    - Description: ES5
    - URL: https://sapes5.sapdevcenter.com:443
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
    

## Build and Deploy of the Application

1. Open the Business Application Studio from Subaccount> Subscriptions
2. Login to the Application using your CF account login credentials
3. Click on "Create Dev Space"
4. Enter the name of the space and Choose "SAP Fiori" and select "Launchpad Module" from Additional Extensions
    ![BizappDevSpace](/doc/img/BizappDevSpace.png)
5. Once the devspace is created, open it.
6. Go to View-> Select "Find Command"
    ![FindCommand](/doc/img/FindCommand.png)
7. Search for "CF Login"
8. Select for "CF: Login on to Cloud Foundry"
    ![CFLoginBizapp](/doc/img/CFLoginBizapp.png)
9. Enter CF API endpoint
10. Enter "Email" and "Password" when prompted
11. Select your org and space to login to Cloud Foundry
12. Go to View > Find Command
13. Search for "Clone" and select the command "Git:Clone"
14. In the pop up, enter the git repository [link](../../)
15. Once the cloning is complete, you can view the project in 'Explorer'
16. Go to Terminal > New Terminal
17. In the terminal window, navigate to the project root folder
18. Run the command - ```mbt build```
19. Once the build is complete, expand the mta_archives folder in the project root folder.
20. Right click on the cloud-extension-html5-sample-1.0.0.mtar and select " Deploy MTA Archive"
![BuildAndDeploy](/doc/img/BuildAndDeploy.png)
21. Add the role collection "BPViewerRC" to your user using the steps mentioned [above](#role-collections).
22. Now, run the command ```cf html5-list -u -d```. Open the URL corresponding to the application.

