<?php
$js_url = iconv('UTF-8','gb2312',$_GET['js_url']);
require_once "jssdk.php";
$jssdk = new JSSDK("wxce7d23c4e285b9c5", "021dac8a28989e3585024ded715b468c", $js_url); 
// $jssdk = new JSSDK("AppID(应用ID)", "AppSecret(应用密钥)");//填写开发者中心你的开发者ID
$signPackage = $jssdk->GetSignPackage();

$res->appId 	= $signPackage["appId"];
$res->timestamp = $signPackage["timestamp"];
$res->nonceStr	= $signPackage["nonceStr"];
$res->signature	= $signPackage["signature"];
$res->url		= $signPackage["url"];
echo json_encode($res);
?>