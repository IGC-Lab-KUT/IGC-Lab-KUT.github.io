---
layout: page
title: gptDesk 
description: This desktop application leverages the power of ChatGPT
img: assets/img/gpt_desk.png
importance: 1
category: General
---


# GPT Desk(aka GPT Teacher) (Under Development)

[![GitHub release](https://img.shields.io/github/v/release/raselmandol/gptDesk)](#) [![GitHub release date](https://img.shields.io/github/release-date/raselmandol/gptDesk)](#) [![GitHub last commit](https://img.shields.io/github/last-commit/raselmandol/gptDesk)](#)


This application is under development and maintained by me. If you find any vulnerability or have any recommendation, please create a new issue or PR, or directly reach me here [raselm@duck.com](raselm@duck.com) or visit [https://raselmandol.com](https://raselmandol.com) for other contact details. 

Desktop version of ChatGPT with a lot of prompt automation, Telegram and Discord APIs.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpt_desk.png" title="gpt-desk" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I am delighted to present GPT Desk, a desktop application (made with C# (.NET)) that I created to allow desktop users to use ChatGPT on Windows (Working on Mac v1 and Linux v1) with a number of extra tools. I made this application in my free time (can call it my ToTo Lab). Created with unwavering dedication during precious moments of free time, UB GUI is a tribute to the unconditional love and unwavering support of two incredible individuals: My Parents. When I get free time again, I will make a better version of this one. Hope you all enjoy this one.


### Features

#### Full Screen(No Minimize Option)

When this application is opened, it will be in maximized mode, occupying the entire screen. To access other minimized applications, a button has been included to restore them, while the application itself will remain in full-screen mode. Only the taskbar will be visible, unhidden.


#### Data and Privacy Policy

The application is the desktop version of the original OpenAI product [ChatGPT](https://chat.openai.com/) . So the data and privacy policy is the same as the original product. [Read Here](https://openai.com/policies/privacy-policy)

## Dev and contributing

Built with [C#(.NET)](https://dotnet.microsoft.com/en-us/)

Dev and compile works on Linux and Windows. You will need the [dotnet Framework](https://dotnet.microsoft.com/en-us/download/dotnet-framework) to run this app.

Any contribution or suggestion is accepted. Feel free to create any report for issues or app crashes. You can also use the report link provided in the application menu to create a crash report or contact me through the link provided.
Pull requests are accepted.

### Developing

1. `editing Form1.cs as the MainForm`
1. `adding otherForms as required.`

## Running the App

### Executables

You can build your own executables from the latest source by running one of the commands below. Executables (with ConfuserX) can be found [here](https://github.com/raselmandol/gptDesk/tree/main/Release). ConfuserEx Documentation [here](https://yck1509.github.io/ConfuserEx/).

### Compiling from source

To import and compile the project in Visual Studio, you can follow these steps:

Clone the repository: Start by cloning the GitHub repository to your local machine. You can use a Git client or the command line to do this. Navigate to your desired directory and run the following command:

 `$ git clone https://github.com/raselmandol/gptDesk`

Open the project in Visual Studio: Launch Visual Studio and select "Open a project or solution" from the startup screen. Navigate to the directory where you cloned the repository and select the project file (typically with a .csproj extension). Click "Open" to load the project into Visual Studio.

Restore NuGet packages: If the project relies on some external NuGet packages, you'll need to restore them. In Visual Studio, right-click on the project in the Solution Explorer and select "Restore NuGet Packages." This will download and install the required packages defined in the project's dependencies.

Build the project: Once the packages are restored, you can build the project. Go to the "Build" menu and select "Build Solution" (or press Ctrl + Shift + B). This will compile the source code and generate the executable or library files. You can find the executable in the Debug folder.


For building with an installer project, find the documentation [here](https://learn.microsoft.com/en-us/visualstudio/deployment/installer-projects-net-core?view=vs-2022).


## Author(s)

- [@raselmandol](https://www.github.com/raselmandol)
