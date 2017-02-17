package learning;

public class EnumExample {

	public enum status {
		CLOSED, OPEN, WIP, RESOLVED
	}

	public enum environments {
		TEST, UAT, PROD
	}

	public enum WhoisRIR {
		ARIN(1), RIPE("whois.ripe.net"), APNIC("whois.apnic.net"), AFRINIC("whois.afrinic.net"), LACNIC(
				"whois.lacnic.net"), JPNIC(
						"whois.nic.ad.jp"), KRNIC("whois.nic.or.kr"), CNNIC("ipwhois.cnnic.cn"), UNKNOWN("");

		private String url;
		private int val;

		WhoisRIR(String url) {
			this.url = url;
		}

		WhoisRIR(int val) {
			this.val = val;
		}

		public String url() {
			return url;
		}

		public int val() {
			return val;
		}
	}

	public enum Operation {
		PLUS, MINUS, TIMES, DIVIDE;
		double calculate(double x, double y) {
			switch (this) {
			case PLUS:
				return x + y;
			case MINUS:
				return x - y;
			case TIMES:
				return x * y;
			case DIVIDE:
				return x / y;
			default:
				throw new AssertionError("Unknown operations " + this);
			}
		}

	}

	public static void main(String[] args) {
/*		System.out.println(status.CLOSED);
		System.out.println(WhoisRIR.ARIN.url());
		System.out.println(WhoisRIR.ARIN.val());
		double result = Operation.PLUS.calculate(678578, 29090);
		System.out.println(result); // 3.0

		for (WhoisRIR rir : WhoisRIR.values()) {
			System.out.println(rir);
			System.out.println(rir.url);
		}

		Operation op = Operation.valueOf("times".toUpperCase());
		System.out.println(op.calculate(10, 3));*/
		
		System.out.println(Integer.compare(1, 2));
	}
}
