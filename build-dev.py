import sys
from subprocess import call


def call_buid(args=[]):
    args.pop(0)
    call("python build.py -d " + " ".join(args), shell=True)


call_buid(sys.argv)
