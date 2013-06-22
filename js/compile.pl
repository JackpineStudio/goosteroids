#!/usr/bin/perl

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

print replace_globals($javascript);

