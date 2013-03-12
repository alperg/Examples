Ext.data.JsonP.Phoenix_controller_ScenarioGridController({"tagname":"class","name":"Phoenix.controller.ScenarioGridController","extends":"Phoenix.controller.AbstractPhoenixController","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Phoenix.controller.ScenarioGridController","code_type":"ext_define","members":{"cfg":[{"name":"notificationService","tagname":"cfg","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"cfg-notificationService"},{"name":"scenarioContext","tagname":"cfg","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"cfg-scenarioContext"},{"name":"scenarioService","tagname":"cfg","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"cfg-scenarioService"},{"name":"uuidGenerator","tagname":"cfg","owner":"Phoenix.controller.ScenarioGridController","meta":{"private":true},"id":"cfg-uuidGenerator"}],"property":[{"name":"control","tagname":"property","owner":"Phoenix.controller.ScenarioGridController","meta":{"private":true},"id":"property-control"},{"name":"inject","tagname":"property","owner":"Phoenix.controller.AbstractPhoenixController","meta":{"private":true},"id":"property-inject"},{"name":"observe","tagname":"property","owner":"Phoenix.controller.ScenarioGridController","meta":{"private":true},"id":"property-observe"}],"method":[{"name":"deleteScenario","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-deleteScenario"},{"name":"getNotificationService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-getNotificationService"},{"name":"getScenarioContext","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-getScenarioContext"},{"name":"getScenarioService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-getScenarioService"},{"name":"getUuidGenerator","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-getUuidGenerator"},{"name":"init","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{"private":true},"id":"method-init"},{"name":"loadScenarios","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-loadScenarios"},{"name":"onActionColumnClick","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-onActionColumnClick"},{"name":"onAddButtonClick","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-onAddButtonClick"},{"name":"onEditScenario","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-onEditScenario"},{"name":"setNotificationService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-setNotificationService"},{"name":"setScenarioContext","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-setScenarioContext"},{"name":"setScenarioService","tagname":"method","owner":"Phoenix.controller.AbstractPhoenixController","meta":{},"id":"method-setScenarioService"},{"name":"setUuidGenerator","tagname":"method","owner":"Phoenix.controller.ScenarioGridController","meta":{},"id":"method-setUuidGenerator"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":2,"files":[{"filename":"ScenarioGridController.js","href":"ScenarioGridController.html#Phoenix-controller-ScenarioGridController"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Deft.mvc.ViewController","Phoenix.controller.AbstractPhoenixController"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Deft.mvc.ViewController<div class='subclass '><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='docClass'>Phoenix.controller.AbstractPhoenixController</a><div class='subclass '><strong>Phoenix.controller.ScenarioGridController</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController' target='_blank'>ScenarioGridController.js</a></div></pre><div class='doc-contents'><p>Controls the scenario grid.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-notificationService' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-notificationService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-cfg-notificationService' class='name not-expandable'>notificationService</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-scenarioContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-cfg-scenarioContext' class='name not-expandable'>scenarioContext</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-scenarioService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-cfg-scenarioService' class='name not-expandable'>scenarioService</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-uuidGenerator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-cfg-uuidGenerator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-cfg-uuidGenerator' class='name not-expandable'>uuidGenerator</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-property-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-property-control' class='name expandable'>control</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{view: {itemdblclick: &quot;onEditScenario&quot;}, addButton: {click: &quot;onAddButtonClick&quot;}, scenarioActionColumn: {click: &quot;onActionColumnClick&quot;}}</code></p></div></div></div><div id='property-inject' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-property-inject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-property-inject' class='name expandable'>inject</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[&quot;scenarioContext&quot;, &quot;scenarioService&quot;, &quot;notificationService&quot;]</code></p></div></div></div><div id='property-observe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-property-observe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-property-observe' class='name expandable'>observe</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{scenarioContext: {initialDataLoaded: &quot;loadScenarios&quot;}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-deleteScenario' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-method-deleteScenario' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-deleteScenario' class='name expandable'>deleteScenario</a>( <span class='pre'>Scenario</span> )</div><div class='description'><div class='short'>Deletes the passed {Phoenix.model.Scenario}. ...</div><div class='long'><p>Deletes the passed {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>}.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Scenario</span> : <a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a><div class='sub-desc'><p>to delete.</p>\n</div></li></ul></div></div></div><div id='method-getNotificationService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-notificationService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-getNotificationService' class='name expandable'>getNotificationService</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of notificationService. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">notificationService</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScenarioContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-getScenarioContext' class='name expandable'>getScenarioContext</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of scenarioContext. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioContext</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScenarioService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-getScenarioService' class='name expandable'>getScenarioService</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of scenarioService. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioService</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUuidGenerator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-cfg-uuidGenerator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-getUuidGenerator' class='name expandable'>getUuidGenerator</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of uuidGenerator. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Phoenix.controller.ScenarioGridController\" rel=\"Phoenix.controller.ScenarioGridController\" class=\"docClass\">uuidGenerator</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-init' rel='Phoenix.controller.AbstractPhoenixController-method-init' class='docClass'>Phoenix.controller.AbstractPhoenixController.init</a></p></div></div></div><div id='method-loadScenarios' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-method-loadScenarios' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-loadScenarios' class='name expandable'>loadScenarios</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Loads the set of {Phoenix.model.Scenario} models ...</div><div class='long'><p>Loads the set of {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>} models</p>\n</div></div></div><div id='method-onActionColumnClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-method-onActionColumnClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-onActionColumnClick' class='name expandable'>onActionColumnClick</a>( <span class='pre'>view, cell, rowIndex, columnIndex, event, scenario, row</span> )</div><div class='description'><div class='short'>Handles a click on the grid's action column. ...</div><div class='long'><p>Handles a click on the grid's action column.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cell</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>columnIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scenario</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onAddButtonClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-method-onAddButtonClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-onAddButtonClick' class='name expandable'>onAddButtonClick</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Handles a click on the add button and opens a new Scenario view. ...</div><div class='long'><p>Handles a click on the add button and opens a new Scenario view.</p>\n</div></div></div><div id='method-onEditScenario' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-method-onEditScenario' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-onEditScenario' class='name expandable'>onEditScenario</a>( <span class='pre'>grid, scenario, row, rowIndex, event</span> )</div><div class='description'><div class='short'>Handles a request to edit a {Phoenix.model.Scenario} model. ...</div><div class='long'><p>Handles a request to edit a {<a href=\"#!/api/Phoenix.model.Scenario\" rel=\"Phoenix.model.Scenario\" class=\"docClass\">Phoenix.model.Scenario</a>} model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scenario</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNotificationService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-notificationService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-setNotificationService' class='name expandable'>setNotificationService</a>( <span class='pre'>notificationService</span> )</div><div class='description'><div class='short'>Sets the value of notificationService. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">notificationService</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>notificationService</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScenarioContext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-setScenarioContext' class='name expandable'>setScenarioContext</a>( <span class='pre'>scenarioContext</span> )</div><div class='description'><div class='short'>Sets the value of scenarioContext. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioContext</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioContext</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScenarioService' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Phoenix.controller.AbstractPhoenixController' rel='Phoenix.controller.AbstractPhoenixController' class='defined-in docClass'>Phoenix.controller.AbstractPhoenixController</a><br/><a href='source/AbstractPhoenixController.html#Phoenix-controller-AbstractPhoenixController-cfg-scenarioService' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.AbstractPhoenixController-method-setScenarioService' class='name expandable'>setScenarioService</a>( <span class='pre'>scenarioService</span> )</div><div class='description'><div class='short'>Sets the value of scenarioService. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.AbstractPhoenixController\" rel=\"Phoenix.controller.AbstractPhoenixController\" class=\"docClass\">scenarioService</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scenarioService</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setUuidGenerator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Phoenix.controller.ScenarioGridController'>Phoenix.controller.ScenarioGridController</span><br/><a href='source/ScenarioGridController.html#Phoenix-controller-ScenarioGridController-cfg-uuidGenerator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Phoenix.controller.ScenarioGridController-method-setUuidGenerator' class='name expandable'>setUuidGenerator</a>( <span class='pre'>uuidGenerator</span> )</div><div class='description'><div class='short'>Sets the value of uuidGenerator. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Phoenix.controller.ScenarioGridController\" rel=\"Phoenix.controller.ScenarioGridController\" class=\"docClass\">uuidGenerator</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uuidGenerator</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});