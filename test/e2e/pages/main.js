module.exports = {
  sections: {
    topbar: {
      selector: ".topbar",
      elements: {
        inputBox: {
          selector: "input"
        },
        btnExplore: {
          selector: "button"
        }
      }
    },
    informationContainer: {
      selector: ".information-container.wrapper",
      elements: {
        title: {
          selector: ".title"
        },
        version: {
          selector: ".version"
        },
        baseUrl: {
          selector: ".base-url"
        },
        mainUrl: {
          selector: ".main a"
        },
        mainUrlContent: {
          selector: ".main a span"
        },
        description: {
          selector: ".description p"
        },
        swaggerUrl: {
          selector: ".description p a:nth-of-type(1)"
        },
        swaggerircUrl: {
          selector: ".description p a:nth-of-type(2)"
        },
        termsLink: {
          selector: ".info > div:nth-child(3) a"
        },
        contactDevLink: {
          selector: ".info > div:nth-child(4) a"
        },
        apacheLink: {
          selector: ".info > div:nth-child(5) a"
        },
        aboutSwaggerLink: {
          selector: ".info > a"
        }
      }
    },
    schemeContainer: {
      selector: ".scheme-container",
      elements: {
        httpOption: {
          selector: "select option"
        },
        btnAuthorize: {
          selector: "button"
        },
        authorizationModal: {
          selector: ".dialog-ux"
        },
        appName: {
          selector: ".auth-container h5"
        },
        authorizationUrl: {
          selector: ".auth-container code"
        },
        flow: {
          selector: ".flow code"
        },
        inputClientID: {
          selector: "#client_id"
        },
        checkWritePetStoreAuth: {
          selector: "#write:pets-checkbox-petstore_auth"
        },
        checkReadPetStoreAuth: {
          selector: "#read:pets-checkbox-petstore_auth"
        }
      }
    },
    apiWrapper: {
      selector: ".swagger-ui .wrapper:nth-child(3)",
      elements: {
        petAPIWrapper: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1)"
        },
        petAPIWrapperBar: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-tag"
        },
        /**
         * Post pet/ api
         */
        petOperationPostContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1)"
        },
        petOperationPostTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1) .opblock-summary-post span.opblock-summary-path span"
        },
        petOperationPostCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1) .opblock-summary-post"
        },
        petOperationPostCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1) .ReactCollapse--collapse"
        },
        petOperationPostTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1) button.try-out__btn"
        },
        petOperationPostTryText: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1) textarea.body-param__text"
        },
        petOperationPostExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-post:nth-of-type(1) button.execute"
        },
        /**
         * Put pet/ api
         */
        petOperationPutContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put"
        },
        petOperationPutTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put .opblock-summary-put span.opblock-summary-path span"
        },
        petOperationPutCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put .opblock-summary-put"
        },
        petOperationPutCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put .ReactCollapse--collapse"
        },
        petOperationPutTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put button.try-out__btn"
        },
        petOperationPutTryText: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put textarea.body-param__text"
        },
        petOperationPutExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-put button.execute"
        },
        /**
         * Get pet/
         */
        petOperationGetByTagContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated"
        },
        petOperationGetByTagTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated .opblock-summary-get span.opblock-summary-path__deprecated span"
        },
        petOperationGetByTagCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated .opblock-summary-get"
        },
        petOperationGetByTagCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated .ReactCollapse--collapse"
        },
        petOperationGetByTagTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated button.try-out__btn"
        },
        petOperationGetByTagTryAdded: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated button.json-schema-form-item-add"
        },
        petOperationGetByTagExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-deprecated button.execute"
        },
        /**
         * Delete pet/
         */
        petOperationDeleteContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-delete"
        },
        petOperationDeleteTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-delete .opblock-summary-delete span.opblock-summary-path span"
        },
        petOperationDeleteCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-delete .opblock-summary-delete"
        },
        petOperationDeleteCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-delete .ReactCollapse--collapse"
        },
        petOperationDeleteTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-delete button.try-out__btn"
        },
        petOperationDeleteExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(1) .opblock-delete button.execute"
        },

        /**
         * ***********Store************
         */
        storeAPIWrapper: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2)"
        },
        storeAPIWrapperBar: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-tag"
        },
        /**
         * Get /store/inventory
         */
        storeOperationGetContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-get:nth-of-type(1)"
        },
        storeOperationGetTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-get:nth-of-type(1) .opblock-summary-get span.opblock-summary-path span"
        },
        storeOperationGetCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-get:nth-of-type(1) .opblock-summary-get"
        },
        storeOperationGetCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-get:nth-of-type(1) .ReactCollapse--collapse"
        },
        storeOperationGetTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-get:nth-of-type(1) button.try-out__btn"
        },
        storeOperationGetExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-get:nth-of-type(1) button.execute"
        },
        /**
         * Post /store/order
         */
        storeOperationPostContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-post"
        },
        storeOperationPostTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-post .opblock-summary-post span.opblock-summary-path span"
        },
        storeOperationPostCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-post .opblock-summary-post"
        },
        storeOperationPostCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-post .ReactCollapse--collapse"
        },
        storeOperationPostTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-post button.try-out__btn"
        },
        storeOperationPostExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-post button.execute"
        },
        /**
         * Delete /store/order/{orderId}
         */
        storeOperationDeleteContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-delete"
        },
        storeOperationDeleteTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-delete .opblock-summary-delete span.opblock-summary-path span"
        },
        storeOperationDeleteCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-delete .opblock-summary-delete"
        },
        storeOperationDeleteCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-delete .ReactCollapse--collapse"
        },
        storeOperationDeleteTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-delete button.try-out__btn"
        },
        storeOperationDeleteExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(2) .opblock-delete button.execute"
        },
        /**
         * *********User**************
         */
        userAPIWrapper: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3)"
        },
        userAPIWrapperBar: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-tag"
        },
        /**
         * Put /user/login
         */
        userOperationPutContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-put"
        },
        userOperationPutTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-put .opblock-summary-put span.opblock-summary-path span"
        },
        userOperationPutCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-put .opblock-summary-put"
        },
        userOperationPutCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-put .ReactCollapse--collapse"
        },
        userOperationPutTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-put button.try-out__btn"
        },
        userOperationPutExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-put button.execute"
        },
        /**
         * Delete /user
         */
        userOperationDeleteContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-delete"
        },
        userOperationDeleteTitle: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-delete .opblock-summary-delete span.opblock-summary-path span"
        },
        userOperationDeleteCollpase: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-delete .opblock-summary-delete"
        },
        userOperationDeleteCollapseContainer: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-delete .ReactCollapse--collapse"
        },
        userOperationDeleteTryBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-delete button.try-out__btn"
        },
        userOperationDeleteExecuteBtn: {
          selector: ".swagger-ui .opblock-tag-section:nth-child(3) .opblock-delete button.execute"
        },

      }
    },
    /* Model Container */
    modelWrapper: {
      selector: ".swagger-ui .wrapper:nth-child(4)",
      elements: {
        modelContainer: {
          selector: ".swagger-ui .models"
        },
        orderModel: {
          selector: "section.models div.model-container:nth-child(1)"
        },
        orderModelCallapse: {
          selector: "section.models div.model-container:nth-child(1) span.model-toggle"
        },
        categoryModel: {
          selector: "section.models div.model-container:nth-child(2)"
        },
        categoryModelCallapse: {
          selector: "section.models div.model-container:nth-child(2) span.model-toggle"
        },
        userModel: {
          selector: "section.models div.model-container:nth-child(3)"
        },
        userModelCallapse: {
          selector: "section.models div.model-container:nth-child(3) span.model-toggle"
        },
        tagModel: {
          selector: "section.models div.model-container:nth-child(4)"
        },
        tagModelCallapse: {
          selector: "section.models div.model-container:nth-child(4) span.model-toggle"
        },
        petModel: {
          selector: "section.models div.model-container:nth-child(5)"
        },
        petModelCallapse: {
          selector: "section.models div.model-container:nth-child(5) span.model-toggle"
        },
        apiResponseModel: {
          selector: "section.models div.model-container:nth-child(6)"
        },
        apiResponseModelCallapse: {
          selector: "section.models div.model-container:nth-child(6) span.model-toggle"
        },
      }
    }




  }
}
