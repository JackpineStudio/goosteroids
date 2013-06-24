#!/usr/bin/perl

require HTTP::Request;
require HTTP::Response;
require LWP::UserAgent;

package ResponseParser;

use base qw(HTML::Parser);
use Data::Dumper;

$ResponseParser::tagname = '';
$ResponseParser::attr = '';
$ResponseParser::output = '';

# This parser only looks at opening tags
sub start {
	my ($self, $tagname, $attr, $attrseq, $origtext) = @_;
	$ResponseParser::tagname = $tagname;
	$ResponseParser::attr = $attr;
}

sub text { 
	my ($self, $text) = @_;
	
	if ($ResponseParser::tagname eq 'textarea' && $ResponseParser::attr->{ name } eq 'TextBox2') {
		$text =~ s/^\s+//;
		$text =~ s/\s+$//;
		$text =~ s/&quot;/"/g;
		$text =~ s/&#39;/'/g;
		$text =~ s/&lt;/\</g;
		$text =~ s/&gt;/\>/g;
		$text =~ s/&amp;&amp;/&&/g;
		print $text;
	}
}

package Main;

use HTTP::Request::Common;

sub print_usage {
	print "Usage: compile.pl [file]\n";
	exit -1;
}

sub random_string {
	@chars = ("A".."Z", "0".."9");
	$string = "X";
	$string .= $chars[rand @chars] for 1..8;
	return $string
}

sub obfuscate {
	$input = $_[0];
	
	$ua = LWP::UserAgent->new;
	$ua->agent("Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0");
	
	$request = POST('http://javascriptobfuscator.com/', 
		[	
			
			'__VIEWSTATE' => '/wEPDwUKLTI0MDAwODAzNmQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgYFCGNiTGluZUJSBQhjYkluZGVudAULY2JFbmNvZGVTdHIFDmNiRW5jb2RlTnVtYmVyBQljYk1vdmVTdHIFDmNiUmVwbGFjZU5hbWVzkhu7ipx09t7ORqMSiqXAZjxixpvev5qGduB5U7lxKAA=',
			'__EVENTVALIDATION' => '/wEdAAtVzcjdONxmP98Zn2VeKgWWESCFkFW/RuhzY1oLb/NUVB2nXP6dhZn6mKtmTGNHd3PN+DvxnwFeFeJ9MIBWR693/0+kJGcigziRf+JnyYP3ngWOnPKUhxuCfOKb0tlvVuly5juiFHJSf6q9cXRA/+LsCzkidEk0Y8qCyJLcOKXNoEywswNt0lfddYqrIj/HYv1fNaBSlQ4gCFEJtbofwBY37hv76BH8vu7iM4tkb8en1RGDlH5soHS6hWUl4JVZYtSZ51XOVy0Wuo6R2616LTDx',
			'TextBox1' => $input,
			'Button1' => 'Obfuscate',
			'cbEncodeStr' => 'on',
			'cbEncodeNumber' => 'on',
			'cbMoveStr' => 'on',
			'cbReplaceNames' => 'on',
		]);
	$request->content_type('application/x-www-form-urlencoded');
	
	$response = $ua->request($request);
	
	my $parser = ResponseParser->new;
    $parser->parse($response->decoded_content);
    
    return $ResponseParser::output;
}

sub replace_globals {
	$input = $_[0];
	
	open(DATA, "<globalvars");
	
	while(<DATA>) {
		$search = $_;
		$search =~ s/^\s+//;
		$search =~ s/\s+$//;
		$replacement = random_string;
		$input =~ s/$search/$replacement/g;
	}
	
	return $input;
}

if ($#ARGV + 1 eq 0) {
	print_usage;
}

$javascript = `cat $ARGV[0]`;

$javascript = replace_globals($javascript);
$javascript = obfuscate($javascript);

print $javascript;

