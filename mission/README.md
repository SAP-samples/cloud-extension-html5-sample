# Mission: Setup for SAP S/4HANA side-by-side UI Extensions on SAP Cloud Platform

The main focus of this mission is to show the full end-to-end setup for a SAP S/4HANA on-premise extension on SAP Cloud Platform (Cloud Foundry) this includes the following steps:
* Setup o the S/4HANA on-premise system
* Setup of the SAP Cloud Platform account and development environment
* End-to-End Connection setup with Principal Propagation (SSO)
* DevOps - using SAP Cloud Continuous Integration & Delivery and monitoring

We will create a simple custom UI application, show the usage of the HTML5 repository and the different options how to expose this application - as a stand-alone or with the different SAP Launchpads environments

[Mission in SAP Cloud Platform Discovery Center](https://discovery-center.cloud.sap/protected/index.html#/missiondetail/3239/3325)


These are the step-by-step guidelines for running the mission. It is divided in two workstreams:

## Landscape Setup

Setup of landscape consists of preparing the API in the S/4 On-Premise system and exposing the backend OData service using SAP Cloud Connector. There are also step instructions to setup the Trust between Cloud Connector and SAP S/4 HANA System

* [Setup of S/4HANA on-premise System](./s4h-setup/README.md)
* [Setup of SAP Cloud Connector & Trust to the SAP S/4HANA System](./cloud-connector/README.md)
* [Setup of SAP Cloud Platform Account using Boosters](./scp-setup/README.md)
* [End-to-End Connectivity Setup](./connectivity/README.md)
* [Setup SAP Cloud Identity and Authentication Service (optional)](./custom-idp/README.md)


## Implementation of a Simple UI Application

Once we have setup the landscape, we can now develop, test and run a Simple UI Application. In this section, we will show you the steps to implement a Simple UI application using the SAP Cloud Managed HTML5 Repository. This is used as a PoC to see if and how the whole landscape setup is working.

* [Develop a Simple UI Application](./create-application/develop/README.md)
* [Test the Simple UI Application](./create-application/test/README.md)
* [Build and Deploy the Application to your SAP Cloud Foundry Account](./create-application/buildDeploy/README.md)
* [Integrate the Continous Integration & Continous Delivery Service](./ci-cd-service/README.md)
  
![Solution Diagram](./images/solution_diagram.png)