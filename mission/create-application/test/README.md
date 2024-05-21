
# Test Your HTML5 Cloud Application

## Introduction

In this section, we would describe steps to test the cloud application which was already created using SAP Business Application Studio.

**Persona:** UX Developer

## Step-by-Step


### Open SAP Business Application Studio and Log In to Cloud Foundry

1. Let us open the service **Business Application Studio** by following the steps described in [Open SAP Business Application Studio](../develop/README.md#open-sap-business-application-studio).
2. If your workspace is stopped, choose **Start** to start your dev space and click the name of your dev space to open your workspace.

   ![Start Workspace](./images/devspace.png)

3. Log in to Cloud Foundry following the steps described in [Login to CF](../develop/README.md#login-to-cloud-foundry-in-sap-business-application-studio).
   

### Test the HTML5 Application
   
1. Now let us run and preview the HTML5 application. Choose **Run configuration** icon from left pane and check if you have pre-created test configuration by the project creation wizard.
2. If yes, then choose the green play icon near **Start sapui5** to open the the preview application. You can then skip the following steps and directly see the preview application as shown in step 9.

   ![startApp](./images/test_02.png)

3. If you do not have a pre-created **Run Configuration**, choose **+** to add a new Run configuration.

   ![Run Config](./images/test_03.png)
   
4. Choose the application that was created.

   ![Select Project](./images/test_04.png)
   
5. In the newly opened **Run Configurations** wizard, check the **Name** and **File Name** as **index.html**. 

   ![Select UI5 Version](./images/test_05.png)
    
   You can either select **Run with mock data** or run with actual data. Select the **Target Destination** as what you have configured in the SAP BTP Destinations, for example **s4hpp** and choose **Save**.  

   ![Enter Name](./images/test_06.png)
   
6. Once the test configuration is created, choose the play icon to run and preview the test application.

    ![Test App](./images/test_07.png)
   
7. Choose **Open** in the popup that appears.

    ![Test App2](./images/TestApp2.png)
   
8. In a new browser window, the preview mode of the application is opened. The preview application shows the Business Partners which are fetched from the backend system configured in the SAP BTP Destination.

    ![runApp](./images/test_10.png)

### Result

Now you have how to test the simple UI application in SAP Business Application Studio and also preview the data from your SAP backend system.

   
