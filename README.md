Trading Journal
=================================

## Description

<div class="about">
	<p>Trading Journal is an app who allow you to keep track of all your trades in <a href="https://trading-journal.glideapp.io/" target="_blank">one single place</a></p>
	<p>
		This app is using the following services and APIs: 
		<ul>
			<li><b>Airtable</b> to store transactions data</li>
			<li><b>Glide and Google Sheets</b></li>
			<li><b>Pipedream</b> for Webhooks and Blockchain interactions</li>
			<li><b>Diadata</b> for market's price and volume data</li>
			<li><b>Coingecko</b> for spaklines data</li>
			<li><b>Quickchart.io</b> for sparkline charts</li>
		</ul>
	</p>
</div>

## NEAR Blockchain Interaction
The contract in `assembly/main.ts` provides methods to get, store and reset likes in blockchain for markets inside the `Markets` tab. Check <a href="https://trading-journal-txs.netlify.app/" target="_blank">trading-journal-txs.netlify.app</a> for app's transactions summary.

