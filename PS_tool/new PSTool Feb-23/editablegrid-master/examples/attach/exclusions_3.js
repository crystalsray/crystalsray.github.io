<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Use substantive assumptions to constraints the number of strata for this study</title>
		
		<script src="../../editablegrid.js"></script>
		<!-- [DO NOT DEPLOY] --> <script src="../../editablegrid_renderers.js" ></script>
		<!-- [DO NOT DEPLOY] --> <script src="../../editablegrid_editors.js" ></script>
		<!-- [DO NOT DEPLOY] --> <script src="../../editablegrid_validators.js" ></script>
		<!-- [DO NOT DEPLOY] --> <script src="../../editablegrid_utils.js" ></script>
		<!-- [DO NOT DEPLOY] --> <script src="../../editablegrid_charts.js" ></script>
		<link rel="stylesheet" href="../../editablegrid.css" type="text/css" media="screen">
		
		<style>
			body { font-family:'lucida grande', tahoma, verdana, arial, sans-serif; font-size:11px; }
			h1 { font-size: 15px; }
			a { color: #548dc4; text-decoration: none; }
			a:hover { text-decoration: underline; }
			table.testgrid { border-collapse: collapse; border: 1px solid #CCB; width: 800px; }
			table.testgrid td, table.testgrid th { padding: 5px; border: 5px solid #E0E0E0; }
			table.testgrid th { background: #E5E5E5; text-align: center; }
			input.invalid { background: red; color: #FDFDFD; }
		</style>
		
		<script>
			window.onload = function() {
				var groupNames= new Array();
				var strataNames = new Array();
				var group1 = localStorage.group1Local;
				var group2 = localStorage.group2Local;
				var strata = localStorage.strata;
				var strata1 = localStorage.strata1;
				var strata2 = localStorage.strata2;
				var strata3 = localStorage.strata3;
				groupNames.push(group1);
				groupNames.push(group2);
				strataNames.push(strata1);
				strataNames.push(strata2);
				strataNames.push(strata3);
              editableGrid = new EditableGrid("DemoGridAttach", { sortIconUp: "up.png", sortIconDown: "down.png"}); 
				// we build and load the metadata in Javascript
				editableGrid.load({ metadata: [
					{ name: "strata1", datatype: "boolean", editable: true },
					{ name: "strata2", datatype: "boolean", editable: true },
					{ name: "strata3", datatype: "boolean", editable: true },
				]});

				// then we attach to the HTML table and render it
				editableGrid.attachToHTMLTable('htmlgrid');
				editableGrid.renderGrid();
				document.getElementById('group1Name').innerHTML = group1;
				document.getElementById('group2Name').innerHTML = group2;
				document.getElementById('strata1Name').innerHTML = strata1;
				document.getElementById('strata2Name').innerHTML = strata2;
				document.getElementById('strata3Name').innerHTML = strata3;
			} 
		</script>
		
	</head>
	
	<body>
		<h1>Use substantive assumptions to constraints the number of strata for this study<br><br><a href="file:///C:/Notepad++/test/PS_tool.html">Back to Input</a></h1>
		<table id="htmlgrid" class="testgrid">
			<tr>
				<th colspan=5 id=group1Name></th>
			</tr>
			<tr>
				<th rowspan=5 id=group2Name></th>
			</tr>
			<tr>
				<th id=strata1Name></th>
				<th id=strata2Name></th>
				<th id=strata3Name></th>
			</tr>
			<tr id="R1">
				<td> </td>
				<td> </td>
				<td> </td>
			</tr>
			<tr id="R2">
				<td> </td>
				<td> </td>
				<td> </td>
			</tr>
			<tr id="R3">
				<td> </td>
				<td> </td>
				<td> </td>
			</tr>
		</table>
	</body>
	
</html>
