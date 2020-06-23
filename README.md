# Managed HTML5 Application Sample
SAP Cloud Platform enables you to access and run HTML5 Applications in a cloud environment without the need to maintain your own runtime infrastructure.

HTML5 Applications consist of static content that runs on a browser. Then you develop your applications - either in SAP Business Application Studio, or in your own IDE (integrated development environment) - and deploy them to the HTML5 Application Repository.

Depending on your backend application setup, you either configure the destinations during development, or define them after deploying the application. Finally, to consume the applications, you can create a site in SAP Cloud Platform Portal, build the URL, and define custom domains.

For more information, please refer [here](https://help.sap.com/viewer/29badeeee3684338b2e870139bdc4d86/Cloud/en-US/c1b9d6facfc942e3bca664ae06387e9b.html)

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
1. From the Subaccount Overview page, click on the tab "Subscriptions"
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
A destination to ES5 is to be configured in the subaccount from which you will access the SAP Business Application Studio.
To do this, please follow the steps below:

1. Create an Account on the Gateway Demo System using the steps [here](https://developers.sap.com/tutorials/gateway-demo-signup.html)
2. Create a Destination within the Cloud Foundry Environment using the steps [here](https://developers.sap.com/tutorials/cp-cf-create-destination.html), and set the ES5 destination properties as follows:
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

## Configure CI/CD for the application (Optional)

Here, we describe the steps to configure a Continuous Integration and Delivery pipeline in the SAP Cloud Platform

### Steps
1. Subscribe to the Continuous Integration and Delivery as explained (above)[#subscriptions]
2. Add the Role Collection "CI CD Service Administrator" as explained (above)[#role-collections]
3. Fork this repository to your own account. 
3. Open the application from Subaccount Overview > Subscriptions > Continuous Integration and Delivery > Go to Applicatiion. 
4. Login to the application using your cloud account credentials
5. Click on the tab 'Credentials' and add the below credentials
  - Github credentials 
  - Cloud account credentials
 ![CICD-Credentials](/doc/img/CICD-Credentials.png)
6. Click on the tab Jobs and Click on '+' icon to create a new job.
7. In the next screen, enter the following inputs :
  - Job Name: cloud-extension-html5-sample
  - URL: <enter the url of your forked repository>
  - Repository credentials : <choose the github credetial created in step 5>
  - Branch: master
  - Add new job for user Input  pipeline:  sap-ui5-cf 
  - Version: latest
  - Build retention: Keep the Logs : 25 days
  - Click on tasks and change Build  State to 'ON'
  - Change the Deploy State  'ON'
  - API Endpoint: <cf api endpoint of your subaccount>
  - Org Name: <cf organisation/subaccount>
  - Space: <cf space>
  - Credentials: <choose the cloud credential created in step 5>
8. Click "ADD"
9. In the pop up, copy the Payload Url and the Secret
10. Open your github repository and click on Settings tab
11. Click on Hooks to add a webhook to your repository
12. Click on Add Webhook
  ![Webhook](/doc/img/Webhook.png)
13. In the next screen, enter the following :
  - Payload Url  : <enter the payload url from step 9>
  - Content Type : 'application/json'
  - Secret       : <enter the secret from step 9>

Now any new commits or PR to this repository will trigger the CI/CD pipeline you have created. To trigger the pipeline manually, go back to the CI/CD pipeline and click on the 'Run' icon as shown below.
![RunCICD](/doc/img/RunCICD.png)

## Known Issues

No known issues.

## How to Obtain Support

In case you find a bug, or you need additional support, please open an issue here in GitHub.
