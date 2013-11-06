# coding=UTF-8
"""
    apply_mincss
    ~~~~~~~~~~~~~~~~~~~~~~~~~~
    by ralsina

    apply_mincss module

"""
import os
import sys

output_folder = os.path.abspath(sys.argv[1])
from mincss.processor import Processor
p = Processor()
#p = Processor(phantomjs=True)
urls = []
css_files = {}
for root, dirs, files in os.walk(output_folder):
    for f in files:
        url = os.path.join(output_folder, root, f)
        if url.endswith('.css'):
            fname = os.path.basename(url)
            if fname in css_files:
                print "You have two CSS files with the same name and that confuses me."
                sys.exit(1)
            css_files[fname] = url
        if not f.endswith('.html'):
            continue
        urls.append(url)

#p.process(*urls)
p.process("http://localhost")

print "INLINES ".ljust(79, '-')
for each in p.inlines:
    print ("On line %s" % each.line)
    print '- ' * 40
    print "BEFORE"
    print each.before
    print '- ' * 40
    print "AFTER:"
    print each.after
    print
print

print "LINKS ".ljust(79, '-')
for each in p.links:
    print ("On href %s" % each.href)
    print '- ' * 40
    print "BEFORE"
    print each.before
    print '- ' * 40
    print "AFTER:"
    print each.after
    print
print

#
#for inline in p.links:
#    fname = os.path.basename(inline.href)
#    print css_files[fname]
#    print "===>", inline.href, len(inline.before), len(inline.after)
#    with open(css_files[fname], 'wb+') as outf:
#        outf.write(inline.after)