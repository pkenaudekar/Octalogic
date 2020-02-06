<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Test.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 195px;
        }
    </style>
    <link href="Content/style.css" rel="stylesheet" />
    <script src="Scripts/planet.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <table>
                <tr>
                    <td><b>Query ( the actual query string ) to get all people whose name contains "Ray":</b></td>                    
               </tr>
                <tr>
                    <td><p>https://swapi.co/api/people/?search=Ray</p></td>
                </tr>
            </table>
        </div>
        <div id="characters"></div>
    </form>
</body>
</html>
