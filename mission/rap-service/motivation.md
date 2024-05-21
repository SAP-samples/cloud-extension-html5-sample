# Motivation

To build a UI application we need an API to our SAP S/4HANA backend system. SAP provides ready-to-use APIs to integrate and extend. You can find them at [SAP Business Accelerator Hub](https://api.sap.com/). But these APIs are mostly useful for system integration, not as UI services. They often lack UI features such as text relationships, value help, search settings, etc. Sometimes you need more control to add additional fields, enable drafts, or even have a newer OData version with its extended feature set.

As always the creating of the own service has its pros and cons:

### Pros:
- Full UI annotations control
- Tailored API: cleaner and easier to understand/mock
- Better performance (no additional fields, data, views, etc.)
- Lower network overhead (no additional requests)
- Custom business logic is available
- Custom authentication control (OAuth)
- Custom authorization control
- OData V4 if necessary

### Cons:
- ABAP Developer skills are needed
- Lifecycle responsibility

## Result

In this mission we will create our own UI service for the Business Partner business object.