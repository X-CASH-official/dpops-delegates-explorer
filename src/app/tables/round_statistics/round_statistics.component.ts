import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import {httpdataservice} from '../../services/http-request.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fixed-table',
  templateUrl: './round_statistics.component.html',
  styleUrls: ['./round_statistics.component.scss']
})
export class round_statisticsComponent implements OnInit {
	public dashCard1 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 20, text_settings: 20, text: '', settings: false, title: 'BLOCK PRODUCER DELEGATE NAME', icon: 'cloud' },
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 20, text: 0, settings: true, title: 'BLOCK PRODUCER BACKUP DELEGATE COUNT', icon: 'cloud' }
    ];
	public dashCard2 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 10, text_settings: 15, text: '', settings: false, title: 'BLOCK PRODUCER DELEGATE PUBLIC ADDRESS', icon: 'cloud' }        
    ];
        public dashCard3 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 10, text_settings: 15, text: '', settings: false, title: 'BLOCK PRODUCER BACKUP DELEGATE NAME', icon: 'cloud' }
    ];
        public dashCard4 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 10, text_settings: 10, text: '', settings: false, title: 'VRF SECRET KEY', icon: 'cloud' }
    ];
        public dashCard5 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 10, text_settings: 20, text: '', settings: false, title: 'VRF PUBLIC KEY', icon: 'cloud' }
    ];
        public dashCard6 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 10, text_settings: 10, text: '', settings: false, title: 'VRF PROOF', icon: 'cloud' }
    ];
        public dashCard7 = [
        { colorDark: '#fa741c', colorLight: '#fb934e', width: 10, text_settings: 10, text: '', settings: false, title: 'VRF BETA STRING', icon: 'cloud' }
    ];
	
	title:string = "Round Statistics";
        delegates_data:string = "";
        BLOCKCHAIN_RESERVED_BYTES_START:string = "7c424c4f434b434841494e5f52455345525645445f42595445535f53544152547c";
        BLOCKCHAIN_DATA_SEGMENT_STRING:string = "7c424c4f434b434841494e5f444154415f5345474d454e545f535452494e477c";
        BLOCKCHAIN_RESERVED_BYTES_END:string = "7c424c4f434b434841494e5f52455345525645445f42595445535f454e447c";
        passed_test:number = 0;
        network_version:boolean;
        timestamp:boolean;
        previous_block_hash:boolean;
        nonce:boolean;
        block_reward_transaction_version:boolean;
        unlock_block:boolean;
        block_reward_input:boolean;
        vin_type:boolean;
        block_height:boolean;
        block_reward_output:boolean;
        block_reward:boolean;
        stealth_address_output_tag:boolean;
        stealth_address_output:boolean;
        extra_bytes_size:boolean;
        transaction_public_key_tag:boolean;
        transaction_public_key:boolean;
        extra_nonce_tag:boolean;
        reserve_bytes_size:boolean;
        block_producer_delegates_name:boolean;
        block_producer_public_address:boolean;
        block_producer_node_backup_count:boolean;
        block_producer_backup_nodes_names:boolean;
        vrf_secret_key_round_part_4:boolean;
        vrf_public_key_round_part_4:boolean;
        vrf_alpha_string_round_part_4:boolean;
        vrf_proof_round_part_4:boolean;
        vrf_beta_string_round_part_4:boolean;
        vrf_data_round_part_4:boolean;
        vrf_data:boolean;
        block_validation_signatures:boolean;
        ringct_version:boolean;
        transaction_amount:boolean;

        block_producer_delegates_name_data:string;
        block_producer_public_address_data:string;
        block_producer_node_backup_count_data:string;
        block_producer_backup_nodes_names_data:string;
        vrf_secret_key_round_part_4_data:string;
        vrf_public_key_round_part_4_data:string;
        vrf_alpha_string_round_part_4_data:string;
        vrf_proof_round_part_4_data:string;
        vrf_beta_string_round_part_4_data:string;

        


	public displayedColumns = ['ID', 'next_block_verifiers'];
	public exampleDatabase1;
        public exampleDatabase2;
        public exampleDatabase3;
        public exampleDatabase4;
        public exampleDatabase5;
	public dataSource1: ExampleDataSource | null;
	public dataSource2: ExampleDataSource | null;
	public dataSource3: ExampleDataSource | null;
	public dataSource4: ExampleDataSource | null;
	public dataSource5: ExampleDataSource | null;
  	public showFilterTableCode;
  	constructor(private route: ActivatedRoute, private httpdataservice: httpdataservice) { }

  	ngOnInit() {
        this.delegates_data = this.route.snapshot.queryParamMap.get("data");
        this.title = "Round Statistics For Block Height " + this.delegates_data;

	  // get the data	 
	  this.httpdataservice.get_request(this.httpdataservice.SERVER_HOSTNAME_AND_PORT_GET_ROUND_STATISTICS + "?parameter1=" + this.delegates_data).subscribe(
	  (res) =>
	  {
            this.exampleDatabase1 = new ExampleDatabase();
            this.exampleDatabase2 = new ExampleDatabase();
            this.exampleDatabase3 = new ExampleDatabase();
            this.exampleDatabase4 = new ExampleDatabase();
            this.exampleDatabase5 = new ExampleDatabase();
            var data = JSON.parse(JSON.stringify(res));

            // set the block verification test
            if (data.network_version === "true")
            {
              this.network_version = true;
              this.passed_test++;
            }
            else
            {
              this.network_version = false;
            }
            if (data.timestamp === "true")
            {
              this.timestamp = true;
              this.passed_test++;
            }
            else
            {
              this.timestamp = false;
            }
            if (data.previous_block_hash === "true")
            {
              this.previous_block_hash = true;
              this.passed_test++;
            }
            else
            {
              this.previous_block_hash = false;
            }
            if (data.nonce === "true")
            {
              this.nonce = true;
              this.passed_test++;
            }
            else
            {
              this.nonce = false;
            }
            if (data.block_reward_transaction_version === "true")
            {
              this.block_reward_transaction_version = true;
              this.passed_test++;
            }
            else
            {
              this.block_reward_transaction_version = false;
            }
            if (data.unlock_block === "true")
            {
              this.unlock_block = true;
              this.passed_test++;
            }
            else
            {
              this.unlock_block = false;
            }
            if (data.block_reward_input === "true")
            {
              this.block_reward_input = true;
              this.passed_test++;
            }
            else
            {
              this.block_reward_input = false;
            }
            if (data.vin_type === "true")
            {
              this.vin_type = true;
              this.passed_test++;
            }
            else
            {
              this.vin_type = false;
            }
            if (data.block_height === "true")
            {
              this.block_height = true;
              this.passed_test++;
            }
            else
            {
              this.block_height = false;
            }
            if (data.block_reward_output === "true")
            {
              this.block_reward_output = true;
              this.passed_test++;
            }
            else
            {
              this.block_reward_output = false;
            }
            if (data.block_reward === "true")
            {
              this.block_reward = true;
              this.passed_test++;
            }
            else
            {
              this.block_reward = false;
            }
            if (data.stealth_address_output_tag === "true")
            {
              this.stealth_address_output_tag = true;
              this.passed_test++;
            }
            else
            {
              this.stealth_address_output_tag = false;
            }
            if (data.stealth_address_output === "true")
            {
              this.stealth_address_output = true;
              this.passed_test++;
            }
            else
            {
              this.stealth_address_output = false;
            }
            if (data.extra_bytes_size === "true")
            {
              this.extra_bytes_size = true;
              this.passed_test++;
            }
            else
            {
              this.extra_bytes_size = false;
            }
            if (data.transaction_public_key_tag === "true")
            {
              this.transaction_public_key_tag = true;
              this.passed_test++;
            }
            else
            {
              this.transaction_public_key_tag = false;
            }
            if (data.transaction_public_key === "true")
            {
              this.transaction_public_key = true;
              this.passed_test++;
            }
            else
            {
              this.transaction_public_key = false;
            }
            if (data.extra_nonce_tag === "true")
            {
              this.extra_nonce_tag = true;
              this.passed_test++;
            }
            else
            {
              this.extra_nonce_tag = false;
            }
            if (data.reserve_bytes_size === "true")
            {
              this.reserve_bytes_size = true;
              this.passed_test++;
            }
            else
            {
              this.reserve_bytes_size = false;
            }
            if (data.block_producer_delegates_name === "true")
            {
              this.block_producer_delegates_name = true;
              this.passed_test++;
            }
            else
            {
              this.block_producer_delegates_name = false;
            }
            if (data.block_producer_public_address === "true")
            {
              this.block_producer_public_address = true;
              this.passed_test++;
            }
            else
            {
              this.block_producer_public_address = false;
            }
            if (data.block_producer_node_backup_count === "true")
            {
              this.block_producer_node_backup_count = true;
              this.passed_test++;
            }
            else
            {
              this.block_producer_node_backup_count = false;
            }
            if (data.block_producer_backup_nodes_names === "true")
            {
              this.block_producer_backup_nodes_names = true;
              this.passed_test++;
            }
            else
            {
              this.block_producer_backup_nodes_names = false;
            }
            if (data.vrf_secret_key_round_part_4 === "true")
            {
              this.vrf_secret_key_round_part_4 = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_secret_key_round_part_4 = false;
            }
            if (data.vrf_public_key_round_part_4 === "true")
            {
              this.vrf_public_key_round_part_4 = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_public_key_round_part_4 = false;
            }
            if (data.vrf_alpha_string_round_part_4 === "true")
            {
              this.vrf_alpha_string_round_part_4 = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_alpha_string_round_part_4 = false;
            }
            if (data.vrf_proof_round_part_4 === "true")
            {
              this.vrf_proof_round_part_4 = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_proof_round_part_4 = false;
            }
            if (data.vrf_beta_string_round_part_4 === "true")
            {
              this.vrf_beta_string_round_part_4 = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_beta_string_round_part_4 = false;
            }
            if (data.vrf_data_round_part_4 === "true")
            {
              this.vrf_data_round_part_4 = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_data_round_part_4 = false;
            }
            if (data.vrf_data === "true")
            {
              this.vrf_data = true;
              this.passed_test++;
            }
            else
            {
              this.vrf_data = false;
            }
            if (data.block_validation_signatures === "true")
            {
              this.block_validation_signatures = true;
              this.passed_test++;
            }
            else
            {
              this.block_validation_signatures = false;
            }
            if (data.ringct_version === "true")
            {
              this.ringct_version = true;
              this.passed_test++;
            }
            else
            {
              this.ringct_version = false;
            }
            if (data.transaction_amount === "true")
            {
              this.transaction_amount = true;
              this.passed_test++;
            }
            else
            {
              this.transaction_amount = false;
            }



            // get the reserve bytes data
            var data2;
            var count = 0;
            var count2 = 0;
            var reserve_bytes = data.reserve_bytes.substr(data.reserve_bytes.indexOf(this.BLOCKCHAIN_RESERVED_BYTES_START)+66,(data.reserve_bytes.indexOf(this.BLOCKCHAIN_RESERVED_BYTES_END)) - (data.reserve_bytes.indexOf(this.BLOCKCHAIN_RESERVED_BYTES_START)+66));
            this.block_producer_delegates_name_data = this.text_to_string(reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count));
            count = count + (this.block_producer_delegates_name_data.length * 2) + 64;
            this.block_producer_public_address_data = this.text_to_string(reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count));
            count = count + (this.block_producer_public_address_data.length * 2) + 64;
            this.block_producer_node_backup_count_data = this.text_to_string(reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count));
            count = count + (this.block_producer_node_backup_count_data.length * 2) + 64;
            this.block_producer_backup_nodes_names_data = this.text_to_string(reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count));
            count = count + (this.block_producer_backup_nodes_names_data.length * 2) + 64;
            this.vrf_secret_key_round_part_4_data = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + this.vrf_secret_key_round_part_4_data.length + 64;            
            this.vrf_public_key_round_part_4_data = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + this.vrf_public_key_round_part_4_data.length + 64;
            this.vrf_alpha_string_round_part_4_data = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + this.vrf_alpha_string_round_part_4_data.length + 64;
            this.vrf_proof_round_part_4_data = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + this.vrf_proof_round_part_4_data.length + 64;
            this.vrf_beta_string_round_part_4_data = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + this.vrf_beta_string_round_part_4_data.length + 64;
            data2 = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + data2.length + 64;
            data2 = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + data2.length + 64;
 
            for (count2 = 0; count2 < 100; count2++)
	    {
	      data2 = reserve_bytes.substr(count,128);
              count = count + data2.length + 64;
              this.exampleDatabase1.addUser((count2 + 1).toString(),data2.toString());
	    }

            for (count2 = 0; count2 < 100; count2++)
	    {
	      data2 = reserve_bytes.substr(count,64);
              count = count + data2.length + 64;
              this.exampleDatabase2.addUser((count2 + 1).toString(),data2.toString());
	    }

            for (count2 = 0; count2 < 100; count2++)
	    {
	      data2 = reserve_bytes.substr(count,200);
              count = count + data2.length + 64;
              this.exampleDatabase3.addUser((count2 + 1).toString(),data2.toString());
	    }

            for (count2 = 0; count2 < 100; count2++)
	    {
	      data2 = this.text_to_string(reserve_bytes.substr(count,196));
              count = count + (data2.length * 2) + 64;
              this.exampleDatabase4.addUser((count2 + 1).toString(),data2.toString());
	    }

            data2 = reserve_bytes.substr(count,reserve_bytes.indexOf(this.BLOCKCHAIN_DATA_SEGMENT_STRING,count) - count);
            count = count + data2.length + 64;

            for (count2 = 0; count2 < 100; count2++)
	    {
              data2 = this.text_to_string(reserve_bytes.substr(count,186));
              count = count + (data2.length * 2) + 64;
              this.exampleDatabase5.addUser((count2 + 1).toString(),data2.toString());
            }

	    this.dashCard1[0].text = this.block_producer_delegates_name_data;
	    this.dashCard1[1].text = this.block_producer_node_backup_count_data;	
	    this.dashCard2[0].text = this.block_producer_public_address_data;
	    this.dashCard3[0].text = this.block_producer_backup_nodes_names_data;	    
	    this.dashCard4[0].text = this.vrf_secret_key_round_part_4_data;
	    this.dashCard5[0].text = this.vrf_public_key_round_part_4_data;
	    this.dashCard6[0].text = this.vrf_proof_round_part_4_data;
	    this.dashCard7[0].text = this.vrf_beta_string_round_part_4_data;
  	    this.dataSource1 = new ExampleDataSource(this.exampleDatabase1);
  	    this.dataSource2 = new ExampleDataSource(this.exampleDatabase2);
  	    this.dataSource3 = new ExampleDataSource(this.exampleDatabase3);
  	    this.dataSource4 = new ExampleDataSource(this.exampleDatabase4);
  	    this.dataSource5 = new ExampleDataSource(this.exampleDatabase5);
            },
            (error) => 
            {
              Swal.fire("Error","An error has occured","error");
            }
	  );		  
	}

text_to_string(text)
{
var string = "";
var count = 0;
for (count = 0; count < text.length; count += 2) 
{
string += String.fromCharCode(parseInt(text.substr(count,2),16));
}
return string;
}
}
