describe("render user api container", function(){
    let mainPage
    let apiWrapper
    beforeEach( function(client, done){
        mainPage = client
            .url("localhost:3200")
            .page.main()

        client.waitForElementVisible(".download-url-input", 5000)
            .pause(2000)
            .clearValue(".download-url-input")
            .setValue(".download-url-input", "http://localhost:3200/test-specs/1.json")
            .click("button.download-url-button")
            .pause(1000)

        apiWrapper = mainPage.section.apiWrapper

        done()
    })
    afterEach(function (client, done) {
        done()
    })
    it("test rendered user container", function(client){
        apiWrapper.waitForElementVisible("@userAPIWrapper", 5000)
            .expect.element("@userAPIWrapper").to.be.visible

    client.end()
    })
    it("callapse user wrapper", function(client){
        apiWrapper.waitForElementVisible("@userAPIWrapper", 5000)
            .click("@userAPIWrapperBar")
            .assert.cssClassNotPresent("@userAPIWrapper", "is-open")

        client.end()
    })
    it("render put /user/{username} api container", function (client) {
        apiWrapper.waitForElementVisible("@userOperationPutContainer", 5000)
            .assert.containsText("@userOperationPutTitle", "/user/{username}")
            .click("@userOperationPutCollpase")
            .waitForElementVisible("@userOperationPutCollapseContainer", 3000)
            .click("@userOperationPutTryBtn")
            .waitForElementVisible("@userOperationPutExecuteBtn", 1000)
            .click("@userOperationPutTryBtn")
            .assert.cssClassNotPresent("@userOperationPutTryBtn", "cancel")
            
        client.end()
    })
    it("render delete /user/{username} api container", function (client) {
        apiWrapper.waitForElementVisible("@userOperationDeleteContainer", 5000)
            .assert.containsText("@userOperationDeleteTitle", "/user/{username}")
            .click("@userOperationDeleteCollpase")
            .waitForElementVisible("@userOperationDeleteCollapseContainer", 3000)
            .click("@userOperationDeleteTryBtn")
            .waitForElementVisible("@userOperationDeleteExecuteBtn", 1000)
            .click("@userOperationDeleteTryBtn")
            .assert.cssClassNotPresent("@userOperationDeleteTryBtn", "cancel")
            
        client.end()
    })
})