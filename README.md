# Mission: Setup for SAP S/4HANA side-by-side UI Extensions on SAP Business Technology Platform
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-extension-html5-sample)](https://api.reuse.software/info/github.com/SAP-samples/cloud-extension-html5-sample)

The main focus of this mission is to show the full end-to-end setup for a SAP S/4HANA on-premise extension on SAP BTP (Cloud Foundry) this includes the following steps:
* Setup SAP S/4HANA on-premise system
* Setup of SAP BTP account and development environment
* End-to-End connection setup with Principal Propagation (SSO)
* DevOps - using SAP Continuous Integration & Delivery and monitoring
* Integration of the HTML5 application in a central Launchpad

We will create a simple custom UI application, show the usage of the HTML5 repository and the different options how to expose this application - as a stand-alone or with the different SAP Launchpads environments.

[Mission in SAP Discovery Center](https://discovery-center.cloud.sap/missiondetail/3239/3325)

## Discover

* [The Mission Story](../../tree/mission/mission/discover/MissionStory.md)
* [Learn the Basics of SAP BTP](../../tree/mission/mission/discover/BTP.md)
* [Learn about SAP S/4HANA](../../tree/mission/mission/discover/S4H.md)
* [Learn about SAP Connectivity Service](../../tree/mission/mission/discover/Connectivity.md)
* [Learn about HTML5 Applications](../../tree/mission/mission/discover/HTML5.md)
* [Learn about SAP Business Application Studio](../../tree/mission/mission/discover/BAS.md)
* [Learn about SAP Cloud Identity Services](../../tree/mission/mission/discover/IAS.md)
* [Learn about DevOps and SAP Continous Integration and Delivery](../../tree/mission/mission/discover/CICD.md)
* [Learn about SAP Launchpad Service and SAP Work Zone](../../tree/mission/mission/discover/Launchpad.md)
* [Learn about Observability on SAP BTP](../../tree/mission/mission/discover/Observability.md)

These are the step-by-step guidelines for running the mission. It is divided in two workstreams:

## Landscape Setup

The setup of the landscape consists of preparing the API in the SAP S/4HANA on-premise system and exposing the backend oData service using SAP Cloud Connector. There are also step-by-step instructions to setup the trust between SAP Cloud Connector and SAP S/4HANA system.

* [Setup of SAP S/4HANA system from the SAP Cloud Appliance Library](https://github.com/SAP-samples/cloud-extension-ecc-business-process/blob/mission/mission/cal-setup/CALS4H.md)
* [Setup of S/4HANA on-premise System](../../tree/mission/mission/s4h-setup/README.md)
* [Setup of SAP Cloud Connector & Trust to the SAP S/4HANA System](../../tree/mission/mission/cloud-connector/README.md)
* [Setup of SAP Business Technology Platform Account](../../tree/mission/mission/scp-setup/README.md)
* [End-to-End Connectivity Setup](../../tree/mission/mission/connectivity/README.md)
* [Setup SAP Identity and Authentication Service (optional)](../../tree/mission/mission/custom-idp/README.md)


## Implementation of a simple UI application

Once we have setup the landscape, we can now develop, test and run a simple UI application. We will show the steps to implement the simple UI application using the SAP BTP managed HTML5 repository. This is a kind of PoC to see if and how the whole landscape setup is working.

* [Develop a simple UI application](../../tree/mission/mission/create-application/develop/README.md)
* [Test the simple UI application](../../tree/mission/mission/create-application/test/README.md)
* [Build and deploy the application to your SAP BTP Cloud Foundry account](../../tree/mission/mission/create-application/buildDeploy/README.md)
* [Integrate the Continous Integration & Continous Delivery Service](../../tree/mission/mission/ci-cd-service/README.md)
* [Publishing your application to a SAP Launchpad site](../../tree/mission/mission/launchpad/README.md)
  
![Solution diagram](./doc/img/solution_diagram.png)


![Link to Reference Application](.)

## Known Issues

No known issues.

## How to Obtain Support

In case you find a bug, or you need additional support, please [open an issue](https://github.com/SAP-samples/cloud-extension-html5-sample/issues/new) here in GitHub.

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
