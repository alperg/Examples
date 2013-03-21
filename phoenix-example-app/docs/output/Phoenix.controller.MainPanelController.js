Ext.data.JsonP.Phoenix_controller_MainPanelController({"tagname":"class","name":"Phoenix.controller.MainPanelController","extends":"Phoenix.controller.AbstractPhoenixController","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Phoenix.view.ScenarioForm"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Phoenix.controller.MainPanelController","code_type":"ext_define","members":{"cfg":[{"name":"notificationService","tagname":"cfg","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"cfg-notificationService"},{"name":"scenarioContext","tagname":"cfg","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"cfg-scenarioContext"},{"name":"scenarioService","tagname":"cfg","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"cfg-scenarioService"}],"property":[{"name":"control","tagname":"property","owner":"Phoenix.controller.MainPanelController","meta":{"private":true},"id":"property-control"},{"name":"inject","tagname":"property","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"property-inject"},{"name":"observe","tagname":"property","owner":"Phoenix.controller.MainPanelController","meta":{"private":true},"id":"property-observe"}],"method":[{"name":"findExistingTab","tagname":"method","owner":"Phoenix.controller.MainPanelController","meta":{},"id":"method-findExistingTab"},{"name":"getNotificationService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-getNotificationService"},{"name":"getScenarioContext","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-getScenarioContext"},{"name":"getScenarioService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-getScenarioService"},{"name":"init","tagname":"method","owner":"Phoenix.controller.MainPanelController","meta":{"private":true},"id":"method-init"},{"name":"loadInitialData","tagname":"method","owner":"Phoenix.controller.MainPanelController","meta":{},"id":"method-loadInitialData"},{"name":"onScenarioDeleted","tagname":"method","owner":"Phoenix.controller.MainPanelController","meta":{},"id":"method-onScenarioDeleted"},{"name":"onScenarioOpened","tagname":"method","owner":"Phoenix.controller.MainPanelController","meta":{},"id":"method-onScenarioOpened"},{"name":"setNotificationService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-setNotificationService"},{"name":"setScenarioContext","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-setScenarioContext"},{"name":"setScenarioService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-setScenarioService"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":2,"files":[{"filename":"MainPanelController.js","href":"MainPanelController.html#Phoenix-controller-MainPanelController"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Deft.mvc.ViewController","Phoenix.controller.AbstractPhoenixController"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Deft.mvc.ViewController<div class='subclass '><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='docClass'>Phoenix.controller.AbstractPhoenixController</a><div class='subclass '><strong>Phoenix.controller.MainPanelController</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Phoenix.view.ScenarioForm' rel='Phoenix.view.ScenarioForm' class='docClass'>Phoenix.view.ScenarioForm</a></div><h4>Files</h4><div class='dependency'><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController' target='_blank'>MainPanelController.js</a></div></pre><div class='doc-contents'><p>Controls the main (root) UI container for the application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-notificationService' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-notificationService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-cfg-notificationService' class='name not-expandable'>notificationService</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-scenarioContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-cfg-scenarioContext' class='name not-expandable'>scenarioContext</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-scenarioService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-cfg-scenarioService' class='name not-expandable'>scenarioService</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-property-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-property-control' class='name expandable'>control</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{view: {boxready: &quot;loadInitialData&quot;}}</code></p></div></div></div><div id='property-inject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-property-inject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-property-inject' class='name expandable'>inject</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&quot;scenarioContext&quot;, &quot;scenarioService&quot;, &quot;notificationService&quot;]</code></p></div></div></div><div id='property-observe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-property-observe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-property-observe' class='name expandable'>observe</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{scenarioContext: {scenarioOpened: &quot;onScenarioOpened&quot;, scenarioDeleted: &quot;onScenarioDeleted&quot;}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-findExistingTab' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-method-findExistingTab' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-method-findExistingTab' class='name expandable'>findExistingTab</a>( <span class='pre'>Scenario</span> ) : <a href=\"#!/api/Phoenix.view.ScenarioForm\" rel=\"Phoenix.view.ScenarioForm\" class=\"docClass\">Phoenix.view.ScenarioForm</a></div><div class='description'><div class='short'>Locates a view for the specified {Phoenix.model.Scenario}. ...</div><div class='long'><p>Locates a view for the specified {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>}. If not view is open, returns null.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Scenario</span> : <a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a><div class='sub-desc'><p>to locate a view for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Phoenix.view.ScenarioForm\" rel=\"Phoenix.view.ScenarioForm\" class=\"docClass\">Phoenix.view.ScenarioForm</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNotificationService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-notificationService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-getNotificationService' class='name expandable'>getNotificationService</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of notificationService. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">notificationService</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScenarioContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-getScenarioContext' class='name expandable'>getScenarioContext</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of scenarioContext. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioContext</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScenarioService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-getScenarioService' class='name expandable'>getScenarioService</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of scenarioService. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioService</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-init' rel='Phoenix.controller.AbstractPhoenixController-method-init' class='docClass'>Phoenix.controller.AbstractPhoenixController.init</a></p></div></div></div><div id='method-loadInitialData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-method-loadInitialData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-method-loadInitialData' class='name expandable'>loadInitialData</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Loads the initial reference dta. ...</div><div class='long'><p>Loads the initial reference dta.</p>\n</div></div></div><div id='method-onScenarioDeleted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-method-onScenarioDeleted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-method-onScenarioDeleted' class='name expandable'>onScenarioDeleted</a>( <span class='pre'>Scenario</span> )</div><div class='description'><div class='short'>Responds when a {Phoenix.model.Scenario} is deleted. ...</div><div class='long'><p>Responds when a {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>} is deleted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Scenario</span> : <a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a><div class='sub-desc'><p>being deleted.</p>\n</div></li></ul></div></div></div><div id='method-onScenarioOpened' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.MainPanelController'>Phoenix.controller.MainPanelController</span><br/><a href='source/MainPanelController.html#Phoenix-controller-MainPanelController-method-onScenarioOpened' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.MainPanelController-method-onScenarioOpened' class='name expandable'>onScenarioOpened</a>( <span class='pre'>Scenario</span> )</div><div class='description'><div class='short'>Responds when a {Phoenix.model.Scenario} view is opened. ...</div><div class='long'><p>Responds when a {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>} view is opened.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Scenario</span> : <a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a><div class='sub-desc'><p>being opened.</p>\n</div></li></ul></div></div></div><div id='method-setNotificationService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-notificationService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-setNotificationService' class='name expandable'>setNotificationService</a>( <span class='pre'>notificationService</span> )</div><div class='description'><div class='short'>Sets the value of notificationService. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">notificationService</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notificationService</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScenarioContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-setScenarioContext' class='name expandable'>setScenarioContext</a>( <span class='pre'>scenarioContext</span> )</div><div class='description'><div class='short'>Sets the value of scenarioContext. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioContext</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioContext</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScenarioService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-setScenarioService' class='name expandable'>setScenarioService</a>( <span class='pre'>scenarioService</span> )</div><div class='description'><div class='short'>Sets the value of scenarioService. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioService</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioService</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});