$(function () {
    $(".lang").on("click", function () {
        if ($(".lang").text() == "English") {
            $(".lang1").text("IAF was born to empower the innovation and development of the Dfinity ecosystem");
            $(".lang2").text("Quickly apply for funding and technical support for your project");
            $(".lang3").text("APPLY NOW");
            $(".lang4").text("What is IAF？");
            $(".lang5").text("IAF(ICP Asia Fund) is an ecosystem fund of up to $15M, managed by SNZ Capital with the Dfinity Foundation in partnership. ");
            $(".lang6").text("The fund will invest in and support early-stage projects in DeFi, NFT, and infrastructure that developing on the Internet Computer, with a particular focus on projects from Asia.");
            $(".lang7").text("What can IAF provide for applicants?");
            $(".lang8").text("-Provide financial support ").append($("<br/>"), "-provide technical support", $("<br/>"), "-Provide community part-time and full-time positions");
            $(".lang9").text("What project is more likely to apply for IAF funding？");
            $(".lang10").text("-High code efficiency, large-scale application-oriented projects.").append($("<br/>"), "-Community-centric, web3-based project. ", $("<br/>"), "-Asian Dfinity ecological projects are prioritized.");
            $(".lang11").text("Contact Us：hello@icpasiafund.com");
            $(".lang").text("中文");
        } else {
            $(".lang1").text("IAF为赋能Dfinity生态系统的创新发展而生");
            $(".lang2").text("为您的项目快速申请资金、技术支持");
            $(".lang3").text("立即申请");
            $(".lang4").text("什么是IAF？");
            $(".lang5").text("IAF（ICP Asia Fund）是一个规模为1500万美元的生态系统基金，由 SNZ Capital 与 Dfinity 基金会合作管理。");
            $(".lang6").text("该基金将投资和支持在互联网计算机上开发的 DeFi、NFT 和基础设施的早期项目，特别关注来自亚洲的项目。");
            $(".lang7").text("IAF能为申请者提供什么？");
            $(".lang8").text("-提供资金支持").append($("<br/>"), "-提供技术支持", $("<br/>"), "-提供社区兼职、全职岗位");
            $(".lang9").text("什么项目更可能申请到IAF资金？");
            $(".lang10").text("-代码效率高、规模应用导向的项目").append($("<br/>"), "-社区中心的、基于 web3 的项目", $("<br/>"), "-亚洲的 Dfinity 生态项目优先");
            $(".lang11").text("联系我们：hello@icpasiafund.com");
            $(".lang").text("English");
        }
    });
});