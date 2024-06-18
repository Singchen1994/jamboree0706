	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="classical";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#1F2232";bookConfig.bgEndColor="#1F2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#602668";bookConfig.totalPageCount=48;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2570;;bookConfig.securityType="1";bookConfig.CreatedTime ="240618163030";bookConfig.bookTitle="jamboree0706";bookConfig.bookmarkCR="0c0356aa449448f72d63ce163392cfc23a9f80e1";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202418162464912","alpha":"0","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.1995036737871637","y":"0.28972169674659576","width":"0.6009439929930417","height":"0.4192443376450739","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzZiZWY3MDItM2FlYS00MzM0LWIzNjEtNmZiODQ1MjNmNjk1%40thread.v2/0?context=%7b%22Tid%22%3a%222de0f6c7-2510-4045-91c3-52d360408d51%22%2c%22Oid%22%3a%224c854e4d-cd10-402d-82eb-a4b3eaa78765%22%7d","linkTarget":"_blank"}}],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162461388","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie1","x":"0.2676268794705854","y":"0.6816981099919901","width":"0.4601965841078293","height":"0.2409802818821685","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/01.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162461604","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie1","x":"0.2724928227336869","y":"0.41754009237009393","width":"0.48367476035229434","height":"0.2812004703716959","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/02.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162467604","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie2","x":"0.2724928227336869","y":"0.6714726383421102","width":"0.4715099021945405","height":"0.2622833478194182","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/03.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162461557","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie3","x":"0.2773587659967885","y":"0.6578386761422704","width":"0.4660357160235512","height":"0.2816265316904409","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/04.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162469774","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie4","x":"0.26032796457593305","y":"0.40731462072021407","width":"0.4879324607075082","height":"0.2934710363515517","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/05.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162465199","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie5","x":"0.23113230499732373","y":"0.39538490379535424","width":"0.548391805751545","height":"0.3110247626838455","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/06.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162466797","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie6","x":"0.23843121989197608","y":"0.40731462072021407","width":"0.5413361880200477","height":"0.3201424749049883","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/07.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162469071","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie7","x":"0.2359982482604253","y":"0.42435707347001383","width":"0.543647511070021","height":"0.2915963665490737","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/08.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162466468","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie8","x":"0.22140041847112063","y":"0.38856792269543433","width":"0.5930368351905017","height":"0.32261363055370934","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/09.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"20241816246832","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie9","x":"0.2578949929443823","y":"0.6493174497673705","width":"0.5073962337599144","height":"0.275917310019258","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/10.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162466074","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie10","x":"0.23843121989197608","y":"0.39538490379535424","width":"0.5537443433409567","height":"0.2933858240878027","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/11.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162461010","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie11","x":"0.19707070215561287","y":"0.4260613187449938","width":"0.6067831249087636","height":"0.3025035363089456","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/12.mp4"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.player::TAnnoSimpleVideoPlayer","annoId":"202418162461062","alpha":"0","prompt":"","promptTime":"","location":{"tannoName":"movie12","x":"0.23843121989197608","y":"0.4039061301702541","width":"0.5386599192253418","height":"0.31324028154131944","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoSimpleVideoPlayer","H5Replay":"false","H5PlaybackNumber":"0","sizeBool":"false","PlayTriggerEvt":"none","StopTriggerEvt":"EVT_PageOffView","previewURL":"","videoURL":"files/pageConfig/13.mp4"}],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202418162469034","alpha":"0","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.38440951778502264","y":"0.16019905584811767","width":"0.23356527662887452","height":"0.16701603694803757","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzZiZWY3MDItM2FlYS00MzM0LWIzNjEtNmZiODQ1MjNmNjk1%40thread.v2/0?context=%7b%22Tid%22%3a%222de0f6c7-2510-4045-91c3-52d360408d51%22%2c%22Oid%22%3a%224c854e4d-cd10-402d-82eb-a4b3eaa78765%22%7d","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202418162468928","alpha":"0","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.3892754610481242","y":"0.410723111270174","width":"0.21945404116588002","height":"0.15619407945191474","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://line.me/R/ti/p/%40125butru#~","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202418162467486","alpha":"0","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.2554620213128315","y":"0.6425004686674506","width":"0.21410150357646832","height":"0.14656509364827786","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.instagram.com/thefaith_2013?igsh=MWY4MHF0Mm1sNjZiZQ==","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202418162468404","alpha":"0","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0","downAlpha":"0","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link3","x":"0.5303878156780693","y":"0.6442047139424306","width":"0.20923556031336676","height":"0.14656509364827786","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"586.77"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.facebook.com/share/U7Z5og4wVWLPoJWc/?mibextid=JRoKGi","linkTarget":"_blank"}}],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}