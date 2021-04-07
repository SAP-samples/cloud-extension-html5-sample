
# Testing your Cloud Application

## Introduction

In this section, we would describe steps to test the cloud application which was already created using SAP Business Application Studio.

**Persona:** UX Developer

**Abbreviation:** SAP Business Technology Platform = SAP BTP

## Step-by-Step


### Open Business Application Studio and login to Cloud Foundry

1. Let us open the service **Business Application Studio** by following the steps described in [Open SAP Business Application Studio](../develop/README.md#open-sap-business-application-studio).
2. If your workspace is stopped, click **Start** to start your dev space and click the name of your dev space to open your workspace.

   ![Start Workspace](./images/startWorkspace.png)

3. Login to Cloud Foundry following the steps described in [Login to CF](../develop/README.md#login-to-cloud-foundry-in-sap-business-application-studio).
   

### Test the HTML5 application
   
1. Now let us run and preview the HTML5 application. Click on **Run configuration** icon from left pane and check if you have pre-created test configuration by the project creation wizard.
2. If yes, then click the green play icon near **Start sapui5** to open the the preview application. You can also skip the following steps and directly see the preview application as shown in step 21.

   ![startApp](./images/startApp.png)

3. If you do not have a pre-created **Run Configuration**, click on **+** to add a new Run configuration.

   ![Run Config](./images/RunConfig.png)
   
4. Choose the application that was created.

   ![Select Project](./images/RunConfig2.png)

5. Choose Runnable File: index.html.

   ![Select RunnableFile](./images/RunConfig3.png)
   
6. Choose UI5 version : latest

    ![Select UI5 Version](./images/RunConfig4.png)
    
7. Enter a name or leave the default to finish creating a Run configuration.

    ![Enter Name](./images/RunConfig5.png)
8. Expand the created Run Configuration. Now we need to map a destination for Data source and a XSUAA instance to see the preview application with data.
9. Click on Datasource (Destination) - Click on the green icon next to it.

    ![Destination config](./images/DestinationRunConfig.png)
    
10. Choose the Destination which was created in the SAP BTP.

     ![Destination config2](./images/DestinationRunConfig2.png)
     
11. Go to View > Find Command.
12. Search for **Service Instance** and choose **CF: Create new Service Instance**

    ![UAA config](./images/UaaRunConfig.png)
    
13. Enter name : bpuaa

    ![UAA name](./images/UaaRunConfig4.png)
    
14. Choose service : xsuaa

    ![UAA select](./images/UaaRunConfig2.png)
    
15. Choose plan: application

    ![UAA plan](./images/UaaRunConfig3.png)
16. Enter a custom xsappname or use the default. Now the XSUAA service instance is created.

    ![UAA custom name](./images/UaaRunConfig5.png)
17. Click on green icon near uaa in the Run configuration and select the created XSUAA instance **bpuaa** in Step 16.

    ![Bind Destination](./images/UaaRunConfig6.png)
    
18. Click on the play icon to run and preview the test application.

    ![Test App](./images/TestApp.png)
   
19. Click on **Expose and Open** in the popup that appears.

    ![Test App2](./images/TestApp2.png)
   
20. Give optional name and press **Enter**.

    ![Test App3](./images/TestApp3.png)
   
21. In a new browser window, the Preview Mode of the application is opened. The preview application shows the Business Partners which are fetched from the backend system configured in the SCP Destination.

    ![runApp](./images/runApp.png)

### Result
Now you have how to test the simple UI application in *SAP Business Application Studio* and also preview the data from your SAP backend system.

   