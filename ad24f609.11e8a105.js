(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{100:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(7),a=(n(0),n(98)),r=n(99),c={id:"whitesource",title:"Whitesource"},s={unversionedId:"development-infrastructure/code-validation/whitesource",id:"development-infrastructure/code-validation/whitesource",isDocsHomePage:!1,title:"Whitesource",description:"| | |",source:"@site/../docs/development-infrastructure/code-validation/whitesource.mdx",slug:"/development-infrastructure/code-validation/whitesource",permalink:"/docs/development-infrastructure/code-validation/whitesource",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/whitesource.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Sonar Cloud",permalink:"/docs/development-infrastructure/code-validation/sonarcloud"},next:{title:"Project Documentation",permalink:"/docs/development-infrastructure/project-documentation"}},l=[{value:"Glossary",id:"glossary",children:[]},{value:"Features",id:"features",children:[]},{value:"WhiteSource Policies",id:"whitesource-policies",children:[]},{value:"Integration with GitHub.com",id:"integration-with-githubcom",children:[{value:"FINOS default configurations",id:"finos-default-configurations",children:[]},{value:"Enable WhiteSource scanning",id:"enable-whitesource-scanning",children:[]},{value:"Testing WhiteSource scanning",id:"testing-whitesource-scanning",children:[]},{value:"Configuring WhiteSource scanning",id:"configuring-whitesource-scanning",children:[]}]},{value:"Build integration",id:"build-integration",children:[]},{value:"Request access",id:"request-access",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{height:"150px",alt:"whitesource-logo",src:Object(r.a)("img/vendors/whitesource-logo.png")}),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null})),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:"left"})))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Name")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Whitesource")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Status")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Delivered")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Link")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(a.b)("a",Object(i.a)({parentName:"td"},{href:"https://whitesourcesoftware.com"}),"whitesourcesoftware.com"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Topics")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Legal, Security, Quality")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Languages")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Javascript")))),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.whitesourcesoftware.com/"}),"WhiteSource")," automatically identi\ufb01es all the open source components and dependencies in your build by constant and automatic cross-referencing of your open source components against WhiteSource\u2019s de\ufb01nitive database of open source repositories.\nWhiteSource provides a dedicated instance to validate and enforce security and legal compliance for all Symphony Software Foundation hosted projects."),Object(a.b)("p",null,"Below are listed the main WhiteSource features that have been adopted by Foundation projects."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Check libraries for outdated versions"),Object(a.b)("li",{parentName:"ol"},"Check libraries for security vulnerabilities"),Object(a.b)("li",{parentName:"ol"},"Check libraries for bugs"),Object(a.b)("li",{parentName:"ol"},"Check libraries for problematic/undefined licenses"),Object(a.b)("li",{parentName:"ol"},"Check libraries for release activity"),Object(a.b)("li",{parentName:"ol"},"Integration with CI environments")),Object(a.b)("h2",{id:"glossary"},"Glossary"),Object(a.b)("p",null,"To avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("strong",{parentName:"li"},"FINOS repository")," is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project"),Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("strong",{parentName:"li"},"FINOS Project")," is a logical entity that includes\na. one or more project leaders\nb. a project team\nc. one or more Foundation repositories; if one, project and repository will have the same name.\nd. In WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each ",Object(a.b)("strong",{parentName:"li"},"WhiteSource Product")," will list below the projects included."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Foundation WhiteSoure dashboard")," - WhiteSource provides a dedicated instance for the Foundation projects that can be accessed\na. by all project leaders, to check and export project metrics\nb. by Foundation Staff, to configure Foundation WhiteSource policies"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Foundation WhiteSource policies")," - A collection of rules and workflows implemented in the WhiteSource dashboard by the Foundation team to enforce security and legal compliance; below are reported the details."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Alert")," - The visual notification that WhiteSource shows in the main dashboard when a policy violation is found")),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("img",{height:"150px",alt:"whitesource-dashboard",src:Object(r.a)("img/vendors/whitesource-dashboard.png")}),Object(a.b)("p",null,"WhiteSource provides the following features to Foundation project leads/committers that have been granted access:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Access the WhiteSource dashboard for one or more projects\na. Access WhiteSource Due Diligence and Risk reports\nb. Browse (and drill down) through project libraries\nc. Browse (and drill down) through licenses found in the project\nd. Check alerts and warnings triggered by policy violations"),Object(a.b)("li",{parentName:"ol"},"Configure WhiteSource build plugins to upload project metrics"),Object(a.b)("li",{parentName:"ol"},"Configure Travis CI (or other CI environments) to continuously\na. validate code against Foundation policies enforced by WhiteSource\nb. fail the build, if any policy violation is found\nc. upload project metrics to the WhiteSource Foundation dashboard")),Object(a.b)("h2",{id:"whitesource-policies"},"WhiteSource Policies"),Object(a.b)("p",null,"Below are the WhiteSource policies that have been configured by the Foundation and are enforced across all integrated projects; all libraries that are scanned in a project are matched against the following policies, in the order reported below, until a policy is matched."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Severity - any library that contains high level CVEs is marked as Rejected,"),Object(a.b)("li",{parentName:"ol"},"[SECURITY]"," Reject High Security Vulnerability Score - any library that contains CVEs with score higher than 7 is marked as Rejected,"),Object(a.b)("li",{parentName:"ol"},"[QUALITY]"," Reject High Bug Rating - any library ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.whitesourcesoftware.com/open-source-bug-tracking/"}),"high bug rating")," is marked as Rejected,"),Object(a.b)("li",{parentName:"ol"},"[LEGAL]"," Licenses that require review - any library with unknown license is marked as Rejected,"),Object(a.b)("li",{parentName:"ol"},"[QUALITY]"," Reassign Low Version Activity - any library with a low amount of versions released is Reassigned to the project lead for validation,"),Object(a.b)("li",{parentName:"ol"},"[QUALITY]"," Reassign Stale (5 years) Library - any library without a release for more than 5 years is Reassigned to the project lead for validation,"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"[LEGAL] Reject Problematic (Category X license) libraries - any library using a Category X license, as indicated in our contribution legal requirements, are marked as Rejected."))),Object(a.b)("p",null,"Note that legal policies are currently disabled due to the large amount of false positive generated by dual-licensed libraries. We are working to improve things."),Object(a.b)("h2",{id:"integration-with-githubcom"},"Integration with GitHub.com"),Object(a.b)("p",null,"FINOS have rolled out the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"}),"WhiteSource integration for Github.com"),", which enables:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all commits on the default branch (commonly master) and Pull Requests"),Object(a.b)("li",{parentName:"ol"},"Automatic (and configurable) scanning of all Pull Requests against the default branch (commonly master)"),Object(a.b)("li",{parentName:"ol"},"Support for most of languages and build tools currently used in FINOS projects"),Object(a.b)("li",{parentName:"ol"},"Creation of GitHub issues with CVE description and meta; please find the issue details on the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com#WhiteSourceforGitHub.com-ViewingDetailsofanIssue"}),"WhiteSource docs page"))),Object(a.b)("img",{alt:"whitesource-issue",src:Object(r.a)("img/vendors/whitesource-issue.png")}),Object(a.b)("h3",{id:"finos-default-configurations"},"FINOS default configurations"),Object(a.b)("p",null,"There are 2 configuration files to define at repository level, in order to enable the WhiteSource integration with GitHub.com: .whitesource file configures the bot and whitesource.config configures the WhiteSource agent."),Object(a.b)("h4",{id:"whitesource"},".whitesource"),Object(a.b)("p",null,"Specifies whether to use GitHub Issues or not and points to the WhiteSource agent configuration. You can copy this file definition from ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"https://github.com/finos/project-blueprint")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'.whitesource\n{\n  "scanSettings": {\n    "configMode": "LOCAL"\n  },\n  "checkRunSettings": {\n    "vulnerableCheckRunConclusionLevel": "failure"\n  },\n  "issueSettings": {\n    "minSeverityLevel": "LOW"\n  }\n}\n')),Object(a.b)("h4",{id:"whitesourceconfig"},"whitesource.config"),Object(a.b)("p",null,"Specifies build-time configurations, including language-specific settings, file inclusions/exclusions and more. You can copy the default configuration from ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"FINOS project blueprint"),". More info can be found on ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/489160834/Unified+Agent+Configuration+File+Parameters"}),"parameters docs page")),Object(a.b)("h3",{id:"enable-whitesource-scanning"},"Enable WhiteSource scanning"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Read the ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/697696422/WhiteSource+for+GitHub.com"}),"WhiteSource for Github.com integration")," documentation, to know what it does and how"),Object(a.b)("li",{parentName:"ol"},"Email ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"mailto:help@finos.org"}),"help@finos.org")," to request the activation of WhiteSource integration on a FINOS hosted project\na. When enabled, the app will create a Pull Request to add a .whitesource file in the codebase root"),Object(a.b)("li",{parentName:"ol"},"Merge the Pull Request raised on point #2")),Object(a.b)("h3",{id:"testing-whitesource-scanning"},"Testing WhiteSource scanning"),Object(a.b)("p",null,"The easiest and less invasive way to test is to create a new branch, add a dependency with security vulnerabilities and commit the change; few minutes later (time depends on build complexity), the app will have created one GitHub Issue for each CVE found."),Object(a.b)("img",{alt:"whitesource-pr-check",src:Object(r.a)("img/vendors/whitesource-pr-check.png")}),Object(a.b)("p",null,"If no issues are created, and want to know if the scan was performed, email ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org")," and FINOS team will help you debugging bot's execution."),Object(a.b)("h3",{id:"configuring-whitesource-scanning"},"Configuring WhiteSource scanning"),Object(a.b)("p",null,"False positives are expected, when enabling the WhiteSource integration, because of a long list of factors related with the (sometimes low) quality of the downstream library that you're consuming; being able to fine-tune the WhiteSource agent is very important, in particular excluding files and folders that should not be scanned, which is necessary most of the times."),Object(a.b)("p",null,"To have the ability to exclude files and folders, you must:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Copy the FINOS blueprint ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/.whitesource"}),Object(a.b)("strong",{parentName:"a"},".whitesource"))," into your GitHub repository."),Object(a.b)("li",{parentName:"ol"},"Copy the FINOS blueprint ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/whitesource.config"}),Object(a.b)("strong",{parentName:"a"},"whitesource.config"))," into your GitHub repository."),Object(a.b)("li",{parentName:"ol"},"Configure your project ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/finos/project-blueprint/blob/master/whitesource.config#L11"}),"excludes")," in ",Object(a.b)("inlineCode",{parentName:"li"},"whitesource.config"),"."),Object(a.b)("li",{parentName:"ol"},"Send a Pull Request to your project which includes a change to your dependencies, and see the WhiteSource scanning in action.")),Object(a.b)("p",null,"Please note that there may be additional configurations to apply, based on your build requirements and tools; build-specific configurations can be viewed  on ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://whitesource.atlassian.net/wiki/spaces/WD/pages/804814917/Unified+Agent+Configuration+File+and+Parameters#UnifiedAgentConfigurationFileandParameters-PackageManagerDependencyResolvers"}),"WhiteSource Agent docs"),", and see what applies to your project configuration."),Object(a.b)("h2",{id:"build-integration"},"Build integration"),Object(a.b)("p",null,"As alternative to the GitHub.com integration, WhiteSource also provides an agent (CLI tool) that can be downloaded and executed from any environment; this may be necessary in case the project's build tool or language are not supported by WhiteSource and some custom build logic must be performed to prepare for the scanning."),Object(a.b)("p",null,"Many build servers are supported, including Travis CI, the most used tool used by FINOS hosted projects"),Object(a.b)("p",null,"Glossary\nTo avoid confusion, below are listed some WhiteSource concepts that differ with the definitions used within the Foundation."),Object(a.b)("p",null,"A Foundation repository is a Github repository hosted by the Foundation; in WhiteSource terms, this is called a project\nA Foundation project is a logical entity that includes\none or more project leaders\na project team\none or more Foundation repositories; if one, project and repository will have the same name.\nIn WhiteSource terms, this is called a product and can be accessed directly by the WhiteSource main menu; each WhiteSource product will list below the projects included."),Object(a.b)("p",null,"Additionally, a convenience script has been created and saved to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/finos/contrib-toolbox/blob/master/scripts/wss-maven-scan.sh"}),"https://github.com/finos/contrib-toolbox/blob/master/scripts/wss-maven-scan.sh")," which can be used for simplifying one-off scanning of projects; it requires a WhiteSource API key that must requested via ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org"),", and accepts GitHub repo coordinates, a GitHub user/org name and a GitHub repository name."),Object(a.b)("p",null,"Below an example to submit metrics for the Open Developer Platform repo."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'export WSS_API_KEY="xxx"\ncurl -L https://raw.githubusercontent.com/finos/contrib-toolbox/master/scripts/wss-maven-scan.sh | bash -s -- finos open-developer-platform\n')),Object(a.b)("h2",{id:"request-access"},"Request access"),Object(a.b)("p",null,"You can request access to the FINOS WhiteSource dashboard if you're part of a FINOS project team; please send an email to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:help@finos.org"}),"help@finos.org")," that specifies:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"the email address you'd like to use to login"),Object(a.b)("li",{parentName:"ol"},"the Foundation project you would like to scan with WhiteSource")),Object(a.b)("p",null,"If you login for the first time in WhiteSource and no project have been registered yet, the dashboard will look empty; ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75530409"}),"check how to configure your build")," in order to upload metrics for the first time."))}b.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=i,h=b["".concat(r,".").concat(p)]||b[p]||d[p]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var i=n(22),o=n(100);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,r=a.forcePrependBaseUrl,c=void 0!==r&&r,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}}}]);